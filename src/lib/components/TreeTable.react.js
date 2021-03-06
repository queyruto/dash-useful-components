import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';
import { TreeTable, TreeState } from 'cp-react-tree-table';
import {
  MdChevronRight,
  MdKeyboardArrowDown
} from "react-icons/md";

/**
 * TreeTable is a Dash component that displays a tree table.
 *
 * TreeTable is the Dash encapsulation of the react tree table by Constantin Panaitescu:
 * https://github.com/constantin-p/cp-react-tree-table
 */
class DashTreeTable extends React.Component {
	constructor(props) {
		super(props);
		const value = TreeState.create(this.props.nodes)
		const collapsed = value.data.map((row, idx, rows) => {
			return  !row.metadata.hasChildren ||
					idx == rows.length - 1 || 
					!rows[idx+1].$state.isVisible
		})
	    this.state = {
			  treeValue: value,
			  collapsed: collapsed
	    };
	}
	
	renderHeaderCell = (column, i) => {
		return (() => <span>{column.label}</span>);
	}
	renderCell = (column, i) => {
		return i == 0
			? ((row) => {
				return (
					<div style={{ paddingLeft: (row.metadata.depth * 15) + 'px'}}
						 className={row.metadata.hasChildren ? 'with-children' : 'without-children'}>
				
						{(row.metadata.hasChildren) 
							? (<button className="rct-collapse rct-collapse-btn" onClick={row.toggleChildren}>
								{!this.state.collapsed[row.metadata.index]
									? <MdKeyboardArrowDown className="rct-icon rct-icon-expand-open" />
   								    : <MdChevronRight className="rct-icon rct-icon-expand-close" />}
							   </button>)
							: ''}
						{typeof row.data[column.property] === 'string'
							?<span style={row.metadata.hasChildren ? {} : { paddingLeft: '24px'}}
								   className={column.className}>{row.data[column.property]}</span>
							:<React.Fragment key={i}>{row.data[column.property]}</React.Fragment>
						}
					  </div>
				);
			})
			: ((row) => {
				return (typeof row.data[column.property] === 'string'
					?<span className={column.className}>{row.data[column.property]}</span>
					:<React.Fragment key={i}>{row.data[column.property]}</React.Fragment>
				);
			})
	}
	render() {
	    return (
	    	<TreeTable
	        	value={this.state.treeValue}
	        	onChange={newValue => {
					const collapsed = newValue.data.map((row, idx, rows) => {
						return  !row.metadata.hasChildren ||
								idx == rows.length - 1 || 
								!rows[idx+1].$state.isVisible
					})
					this.setState({ 
						treeValue: newValue,
						collapsed: collapsed
					});
				}}
				{...omit(['nodes', 'columns', 'setProps'], this.props)}
				data-dash-is-loading={
		          	(this.props.loading_state && this.props.loading_state.is_loading) ||
		          	undefined
				}
			>
				{this.props.columns.map((column, i) => {
					return (
						<TreeTable.Column key="column_{i}" basis="{column.basis}px" grow="{column.grow}"
							renderCell={this.renderCell(column, i)}
							renderHeaderCell={this.renderHeaderCell(column, i)}/>
					)
				})}
	      	</TreeTable>
	   );
	}
}

const nodeShape = {
	/** The node label */
	data: PropTypes.any.isRequired,

	/** The node value */
	height: PropTypes.number
};
nodeShape.children = PropTypes.arrayOf(PropTypes.shape(nodeShape));

const columnShape = {
	/** The title */
	label: PropTypes.string.required,

	/** The row property to display */
	property: PropTypes.string.required,

	/** The node element to display */
	renderer: PropTypes.func,

	/** flexGrow CSS property */
	grow: PropTypes.number,

	/** flexBasis CSS property */
	basis: PropTypes.number,

	/** Classname of the column */
	className: PropTypes.string
}

DashTreeTable.propTypes = {
	/**
 	 * The ID of this component, used to identify dash components
	 * in callbacks. The ID needs to be unique across all of the
	 * components in an app.
	 */
	id: PropTypes.string,

	/**
	 * The data structure to display
	 */
	nodes: PropTypes.arrayOf(PropTypes.shape(nodeShape)),

	/**
	 * The columns to display
	 */
	columns: PropTypes.arrayOf(PropTypes.shape(columnShape)),

	/**
	 * The height of the rendered table (pixels).
	 */
	height: PropTypes.number,

	/**
	 * The height of the rendered header row (pixels).
	 */
	headerHeight: PropTypes.number,

	/**
	 * Defines CSS styles which will override styles previously set.
	 */
	style: PropTypes.object,

	/**
	 * Often used with CSS to style elements with common properties.
	 */
	className: PropTypes.string,

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

}

DashTreeTable.defaultProps = {
}

export default DashTreeTable;