import React from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';
import CheckBoxTree from 'react-checkbox-tree';
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdChevronRight,
  MdKeyboardArrowDown,
  MdAddBox,
  MdIndeterminateCheckBox,
  MdFolder,
  MdFolderOpen,
  MdInsertDriveFile
} from "react-icons/md";

/**
 * CheckBoxTree is a component that displays a tree with optional checkboxes.
 * The tree structure is defined by the `nodes` property. The checked status of the nodes
 * are stored in the `checked` property.
 *
 * CheckBoxTree is the Dash encapsulation of the react checkbox tree by Jake Zatecky:
 * https://github.com/jakezatecky/react-checkbox-tree
 */
class DashCheckBoxTree extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: props.checked,
			expanded: props.expanded
		};
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			checked: newProps.checked,
			expanded: newProps.expanded
		});
	}

	render() {
	    const icons = {
	        check: <MdCheckBox className="rct-icon rct-icon-check" />,
	        uncheck: <MdCheckBoxOutlineBlank className="rct-icon rct-icon-uncheck" />,
	        halfCheck: (<MdIndeterminateCheckBox className="rct-icon rct-icon-half-check" />),
	        expandClose: (<MdChevronRight className="rct-icon rct-icon-expand-close" />),
	        expandOpen: (<MdKeyboardArrowDown className="rct-icon rct-icon-expand-open" />),
	        expandAll: <MdAddBox className="rct-icon rct-icon-expand-all" />,
	        collapseAll: (<MdIndeterminateCheckBox className="rct-icon rct-icon-collapse-all" />),
	        parentClose: <MdFolder className="rct-icon rct-icon-parent-close" />,
	        parentOpen: <MdFolderOpen className="rct-icon rct-icon-parent-open" />,
	        leaf: <MdInsertDriveFile className="rct-icon rct-icon-leaf-close" />
	    };

		return (
			<CheckBoxTree
		        nodes={this.props.nodes}
				checked={this.state.checked}
				expanded={this.state.expanded}
		        icons={icons}
				{...omit(['checked', 'expanded', 'setProps'], this.props)}
				onCheck={checked => {
					if(this.props.setProps) {
						this.props.setProps({checked: checked});
					} else {
						this.setState({checked: checked })
					}
				}}
		        onExpand={expanded => {
					if(this.props.setProps) {
						this.props.setProps({expanded: expanded});
					} else {
						this.setState({expanded: expanded })
					}
		        }}
				data-dash-is-loading={
		          	(this.props.loading_state && this.props.loading_state.is_loading) ||
		          	undefined
				}
			/>
		);
	}
}

const nodeShape = {
	/** The node label */
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,

	/** The node value */
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,

	/** A classname to add to the node */
	className: PropTypes.string,

	/** Whether the node should be disabled */
	disabled: PropTypes.bool,
	
	/** An icon tag. Default: star */
	icon: PropTypes.string,

	/** Whether the node should show a checkbox */
	showCheckbox: PropTypes.bool
};
nodeShape.children = PropTypes.arrayOf(PropTypes.shape(nodeShape));

DashCheckBoxTree.propTypes = {
	/**
	* The ID of this component, used to identify dash components
	* in callbacks. The ID needs to be unique across all of the
	* components in an app.
	*/
	id: PropTypes.string,

	/**
	* The children of this component
	*/
	nodes: PropTypes.arrayOf(PropTypes.shape(nodeShape)),

	/**
	* An array of checked node values
	*/
	checked: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

	/**
	* An array of expanded node values.
	*/
	expanded: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

	/**
	* If true, the component will be disabled and nodes cannot be checked
	*/
	disabled: PropTypes.bool,

	/**
	* If true, the ability to expand nodes will be disabled
	*/
	expandDisabled: PropTypes.bool,

	/**
	* If true, nodes will be expanded by clicking on labels. Requires
	* a non-empty onClick function
	*/
	expandOnClick: PropTypes.bool,

	/**
	* Optional name for the hidden <input> element
	*/
	name: PropTypes.string,

	/**
	* If true, the hidden <input> will encode its values as an array
	* rather than a joined string
	*/
	nameAsArray: PropTypes.bool,

	/**
	* If true, native browser checkboxes will be used insted of pseudo-checkbox icons.
	*/
	nativeCheckboxes: PropTypes.bool,

	/**
	* If true, toggling a parent node will not cascade its check state to its children
	*/
	noCascade: PropTypes.bool,

	/**
	* If true, checkboxes will only be shown for leaf nodes
	*/
	onlyLeafCheckboxes: PropTypes.bool,

	/**
	* If true, toggling a partially-checked node will select all children.
	* If false, it will deselect.
	*/
	optimisticToggle: PropTypes.bool,

	/**
	* If true, each node will show a parent or leaf icon.
	*/
	showNodeIcon: PropTypes.bool,

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

DashCheckBoxTree.defaultProps = {
	checked: [],
	expanded: [],
	disabled: false,
	expandDisabled: false,
	expandOnClick: false,
	name: '',
	nameAsArray: false,
	nativeCheckboxes: false,
	noCascade: false,
	onlyLeafCheckboxes: false,
	optimisticToggle: true,
	showNodeIcon: true
}

export default DashCheckBoxTree;