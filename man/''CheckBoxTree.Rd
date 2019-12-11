% Auto-generated: do not edit by hand
\name{''CheckBoxTree}

\alias{''CheckBoxTree}

\title{CheckBoxTree component}

\description{
CheckBoxTree is a component that displays a tree with optional checkboxes. The tree structure is defined by the `nodes` property. The checked status of the nodes are stored in the `checked` property.  CheckBoxTree is the Dash encapsulation of the react checkbox tree by Jake Zatecky: https://github.com/jakezatecky/react-checkbox-tree
}

\usage{
''CheckBoxTree(id=NULL, nodes=NULL, checked=NULL, expanded=NULL, disabled=NULL,
expandDisabled=NULL, expandOnClick=NULL, name=NULL, nameAsArray=NULL,
nativeCheckboxes=NULL, noCascade=NULL, onlyLeafCheckboxes=NULL,
optimisticToggle=NULL, showNodeIcon=NULL, style=NULL, className=NULL,
loading_state=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{nodes}{List of lists containing elements 'label', 'value', 'classname', 'disabled', 'icon', 'showcheckbox'.
those elements have the following types:
  - label (character | numeric; required): the node label
  - value (character | numeric; required): the node value
  - classname (character; optional): a classname to add to the node
  - disabled (logical; optional): whether the node should be disabled
  - icon (character; optional): an icon tag. default: star
  - showcheckbox (logical; optional): whether the node should show a checkboxs. The children of this component}

\item{checked}{List of character | numerics. An array of checked node values}

\item{expanded}{List of character | numerics. An array of expanded node values.}

\item{disabled}{Logical. If true, the component will be disabled and nodes cannot be checked}

\item{expandDisabled}{Logical. If true, the ability to expand nodes will be disabled}

\item{expandOnClick}{Logical. If true, nodes will be expanded by clicking on labels. Requires
a non-empty onClick function}

\item{name}{Character. Optional name for the hidden <input> element}

\item{nameAsArray}{Logical. If true, the hidden <input> will encode its values as an array
rather than a joined string}

\item{nativeCheckboxes}{Logical. If true, native browser checkboxes will be used insted of pseudo-checkbox icons.}

\item{noCascade}{Logical. If true, toggling a parent node will not cascade its check state to its children}

\item{onlyLeafCheckboxes}{Logical. If true, checkboxes will only be shown for leaf nodes}

\item{optimisticToggle}{Logical. If true, toggling a partially-checked node will select all children.
If false, it will deselect.}

\item{showNodeIcon}{Logical. If true, each node will show a parent or leaf icon.}

\item{style}{Named list. Defines CSS styles which will override styles previously set.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}
}
