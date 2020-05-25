import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';
import {
    MdChevronRight,
    MdKeyboardArrowDown
  } from "react-icons/md";
  
/**
 * CollapsibleTableCell is an inner component used by CollapsibleTableBody
 * to render the row header with :
 * - a button to expand / collapse the row
 * - a label if defined
 */
class CollapsibleTableCell extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            expanded: this.props.expanded
        };
    }
       
	componentWillReceiveProps(newProps) {
        this.setState({
            expanded: newProps.expanded
	    });
	}

	render() {
        // filter children with the visible ones
        const {children, index, expandable, level, loading_state, ...otherProps} = this.props;
        const padding = 15 * (level - 1) + (expandable ? 0 : 24);

        const buttonTag = expandable ?
                <button className="rct-collapse rct-collapse-btn" onClick={(e) => {
                    const newState = !this.state.expanded
                    if(this.props.setProps) {
                        this.props.setProps({expanded: newState});
                    } else {
                        this.setState({expanded: newState})
                    }
                    // fire an event to the parent component (i.e. CollapsibleTableBody)
                    this.props.onExpand(this.props.index, newState);
                }}>
                {this.state.expanded
                    ? <MdKeyboardArrowDown className="rct-icon rct-icon-expand-open" />
                    : <MdChevronRight className="rct-icon rct-icon-expand-close" />}
                </button>
            : ""

        return (
            <th className="collapsible-cell" {...omit(['setProps', 'expanded', 'onExpand'], otherProps)}
                style={{paddingLeft: padding + 'px', textAlign: 'left'}}>
                    {buttonTag}
                    {children}
            </th>
        );
    }
};
CollapsibleTableCell.propTypes = {
    /**
     * Index of the row (used to handle the expanded state at CollapsibleTableBody level)
     */
    index: PropTypes.number.isRequired,

    /**
     * Whether the cel is expandable or not
     */
    expandable: PropTypes.bool.isRequired,

    /**
     * Level of the row
     */
    level: PropTypes.number,

    /**
     * Whether the cell is expanded or collapsed
     */
    expanded: PropTypes.bool,

    /**
     * Callback when the expanded status changes
     */
    onExpand: PropTypes.func.isRequired,

	/**
	 * Dash-assigned callback that should be called to report property changes
	 * to Dash, to make them available for callbacks.
	 */
	setProps: PropTypes.func
}

export default CollapsibleTableCell;
