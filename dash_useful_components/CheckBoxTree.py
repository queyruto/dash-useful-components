# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CheckBoxTree(Component):
    """A CheckBoxTree component.
CheckBoxTree is a component that displays a tree with optional checkboxes.
The tree structure is defined by the `nodes` property. The checked status of the nodes
are stored in the `checked` property.

CheckBoxTree is the Dash encapsulation of the react checkbox tree by Jake Zatecky:
https://github.com/jakezatecky/react-checkbox-tree

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- nodes (dict; optional): The children of this component. nodes has the following type: list of dicts containing keys 'label', 'value', 'className', 'disabled', 'icon', 'showCheckbox'.
Those keys have the following types:
  - label (string | number; required): The node label
  - value (string | number; required): The node value
  - className (string; optional): A classname to add to the node
  - disabled (boolean; optional): Whether the node should be disabled
  - icon (string; optional): An icon tag. Default: star
  - showCheckbox (boolean; optional): Whether the node should show a checkbox
- checked (list of string | numbers; optional): An array of checked node values
- expanded (list of string | numbers; optional): An array of expanded node values.
- disabled (boolean; default False): If true, the component will be disabled and nodes cannot be checked
- expandDisabled (boolean; default False): If true, the ability to expand nodes will be disabled
- expandOnClick (boolean; default False): If true, nodes will be expanded by clicking on labels. Requires
a non-empty onClick function
- name (string; default ''): Optional name for the hidden <input> element
- nameAsArray (boolean; default False): If true, the hidden <input> will encode its values as an array
rather than a joined string
- nativeCheckboxes (boolean; default False): If true, native browser checkboxes will be used insted of pseudo-checkbox icons.
- noCascade (boolean; default False): If true, toggling a parent node will not cascade its check state to its children
- onlyLeafCheckboxes (boolean; default False): If true, checkboxes will only be shown for leaf nodes
- optimisticToggle (boolean; default True): If true, toggling a partially-checked node will select all children.
If false, it will deselect.
- showNodeIcon (boolean; default True): If true, each node will show a parent or leaf icon.
- style (dict; optional): Defines CSS styles which will override styles previously set.
- className (string; optional): Often used with CSS to style elements with common properties.
- loading_state (dict; optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: dict containing keys 'is_loading', 'prop_name', 'component_name'.
Those keys have the following types:
  - is_loading (boolean; optional): Determines if the component is loading or not
  - prop_name (string; optional): Holds which property is loading
  - component_name (string; optional): Holds the name of the component that is loading"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, nodes=Component.UNDEFINED, checked=Component.UNDEFINED, expanded=Component.UNDEFINED, disabled=Component.UNDEFINED, expandDisabled=Component.UNDEFINED, expandOnClick=Component.UNDEFINED, name=Component.UNDEFINED, nameAsArray=Component.UNDEFINED, nativeCheckboxes=Component.UNDEFINED, noCascade=Component.UNDEFINED, onlyLeafCheckboxes=Component.UNDEFINED, optimisticToggle=Component.UNDEFINED, showNodeIcon=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'nodes', 'checked', 'expanded', 'disabled', 'expandDisabled', 'expandOnClick', 'name', 'nameAsArray', 'nativeCheckboxes', 'noCascade', 'onlyLeafCheckboxes', 'optimisticToggle', 'showNodeIcon', 'style', 'className', 'loading_state']
        self._type = 'CheckBoxTree'
        self._namespace = 'dash_useful_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'nodes', 'checked', 'expanded', 'disabled', 'expandDisabled', 'expandOnClick', 'name', 'nameAsArray', 'nativeCheckboxes', 'noCascade', 'onlyLeafCheckboxes', 'optimisticToggle', 'showNodeIcon', 'style', 'className', 'loading_state']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CheckBoxTree, self).__init__(**args)
