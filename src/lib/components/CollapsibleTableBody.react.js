import React from 'react';
import PropTypes from 'prop-types';
import CollapsibleTableCell from './CollapsibleTableCell.react';

/**
 * CollapsibleTableBody is a component that displays a table with collapsible rows.
 * Its children are a set of table cells (td tag) organized by rows. The rows are defined
 * with a level (i.e. the depth in the rows hierarchy). The cells can contain any kind of
 * content (some text or another component such as a slider); this differs from TreeTable
 * that only renders text content.
 * 
 * Every rows can have the same number of columns or it is possible to specify the number 
 * of columns of each row. Finally, the rows can have a label (row headers).
 * The generated table has one additionnal cell that contains a button to expand / collapse 
 * the row and the label if specified.
 * 
 * The expanded / collapsed status of the rows can be deduced from the visibleRows property.
 */
class CollapsibleTableBody extends React.Component {
	constructor(props) {
        super(props);
        // In JavaScript, class methods are not bound by default
        this.parseChildrenToArray = this.parseChildrenToArray.bind(this)
        this.checkProps = this.checkProps.bind(this)

        this.checkProps(props)
        this.state = {
            visibleRows: "visibleRows" in props ? props.visibleRows : props.rowLevels.map(level => level == 1)
	    };
	}
    
	componentWillReceiveProps(newProps) {
        this.checkProps(newProps)
        this.setState({
            visibleRows: "visibleRows" in newProps ? newProps.visibleRows : newProps.rowLevels.map(level => level == 1)
	    });
	}

    checkProps(props) {
        const children = this.parseChildrenToArray();

        // check if rowLevels is consistent
        this.props.rowLevels.map((level, index, levels) => {
            if(level < 1)
                throw "Invalid rowLevels at index "+index+". Must be >= 1"
            if(index == 0) {
                if(level != 1) 
                    throw "Invalid rowLevels at index "+index+". Must be == 1"
            } else if(level > levels[index-1] + 1) // not sibling or child
                throw "Invalid rowLevels at index "+index+". Can't be > previous rowLevel + 1."
        });
        // check if rowLevels and nbCols are coherent
        if(Array.isArray(this.props.nbCols) && this.props.nbCols.length != this.props.rowLevels.length) {
            throw "Incoherent nbCols, rowLevels: they must be the same size.";
        }
        // check if rowLevels, nbCols and children are coherent
        const nbCells = !Array.isArray(this.props.nbCols)
            ? this.props.rowLevels.length * this.props.nbCols
            : this.props.nbCols.reduce((pv, cv) => pv + cv, 0)
        if (nbCells != children.length) {
            throw "Incoherent nbCols, rowLevels and children. Children.length must be equal to " + 
                Array.isArray(this.props.nbCols) ? "the sum of nbCols" : "nbCols * rowLevels.length.";
        }
    }

    parseChildrenToArray() {
        if (this.props.children && !Array.isArray(this.props.children)) {
            // if children contains just one single element, it gets passed as an object
            // instead of an array - so we put in in a array ourselves!
            return [this.props.children];
        }
        if(!this.props.children) {
            return [];
        }
        return this.props.children;
    }

    onExpand = (index, expanded) => {
        const currentLevel = this.props.rowLevels[index]
        const visibleRows = this.state.visibleRows
        const nbRows = this.props.rowLevels.length;

        // update visible status of the next rows
        for(let i=index + 1; i<nbRows; i++){
            const isChild = this.props.rowLevels[i] == currentLevel + 1
            const isSibling_or_parent = this.props.rowLevels[i] <= currentLevel
            if (isSibling_or_parent) {
                // do not change visible status of every following rows
                // ==> stop the loop
                break;
            }
            else {
                // the visible status changes only if the row is a child (not a grand child)
                visibleRows[i] = expanded ? isChild : false
            }
        }

        // check if the component is used by Dash or not
        if(this.props.setProps) {
            this.props.setProps({visibleRows: visibleRows});
        } else {
            this.setState({visibleRows: visibleRows})
        }
    }

	render() {
        // filter children with the visible ones
        const children = this.parseChildrenToArray()
        const nbRows = this.props.rowLevels.length;
        const hasChildren = this.props.rowLevels.map((level, index, levels) => index < levels.length - 1 && level < levels[index + 1])

        const tableRows = new Array(nbRows)
        for(let i=0; i<nbRows; i++) {
            if(this.state.visibleRows[i]) {
                let rowChildren = 0
                if (Array.isArray(this.props.nbCols)) {
                    let startIndex = 0
                    for(let j=0; j<i; j++) {
                        startIndex += this.props.nbCols[j]
                    }
                    rowChildren = children.slice(startIndex, startIndex + this.props.nbCols[i])
                } else {
                    rowChildren = children.slice(i * this.props.nbCols, (i+1) * this.props.nbCols)
                }
                const isExpanded = hasChildren[i] ? this.state.visibleRows[i+1] : false
                const rowHeader = this.props.rowHeaders[i]
                tableRows.push(
                    <tr key={"row"+i}>
                        <CollapsibleTableCell index={i} level={this.props.rowLevels[i]}
                                              expandable={hasChildren[i]}
                                              expanded={isExpanded}
                                              onExpand={this.onExpand}>
                            {rowHeader}
                        </CollapsibleTableCell>
                        {rowChildren}
                    </tr>
                )
            }
        }
        
        return (
            <tbody>
                {tableRows}
            </tbody>
        );
    }
};

CollapsibleTableBody.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * The children of this component (the cells Th and Td)
     */
    children: PropTypes.node,

    /**
     * The number of columns, a number if all rows have the same number of cols,
     * or an array if rows have different number of cols.
     */
    nbCols: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]).isRequired,

    /**
     * The tree structure of children
     */
    rowLevels: PropTypes.arrayOf(PropTypes.number).isRequired,

    /**
     * The row headers
     */
    rowHeaders: PropTypes.arrayOf(PropTypes.string),

    /**
     * Expanded / collapsed status of the rows
     */
    visibleRows: PropTypes.arrayOf(PropTypes.bool),

    /**
     * Defines CSS styles which will override styles previously set.
     */
    style: PropTypes.object,
  
    /**
     * Often used with CSS to style elements with common properties.
     */
    className: PropTypes.string,
  
    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    key: PropTypes.string,
  
    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,

        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,

        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

	/**
	 * Dash-assigned callback that should be called to report property changes
	 * to Dash, to make them available for callbacks.
	 */
	setProps: PropTypes.func
};

export default CollapsibleTableBody;
