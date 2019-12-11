# AUTO GENERATED FILE - DO NOT EDIT

''CheckBoxTree <- function(id=NULL, nodes=NULL, checked=NULL, expanded=NULL, disabled=NULL, expandDisabled=NULL, expandOnClick=NULL, name=NULL, nameAsArray=NULL, nativeCheckboxes=NULL, noCascade=NULL, onlyLeafCheckboxes=NULL, optimisticToggle=NULL, showNodeIcon=NULL, style=NULL, className=NULL, loading_state=NULL) {
    
    props <- list(id=id, nodes=nodes, checked=checked, expanded=expanded, disabled=disabled, expandDisabled=expandDisabled, expandOnClick=expandOnClick, name=name, nameAsArray=nameAsArray, nativeCheckboxes=nativeCheckboxes, noCascade=noCascade, onlyLeafCheckboxes=onlyLeafCheckboxes, optimisticToggle=optimisticToggle, showNodeIcon=showNodeIcon, style=style, className=className, loading_state=loading_state)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CheckBoxTree',
        namespace = 'dash_useful_components',
        propNames = c('id', 'nodes', 'checked', 'expanded', 'disabled', 'expandDisabled', 'expandOnClick', 'name', 'nameAsArray', 'nativeCheckboxes', 'noCascade', 'onlyLeafCheckboxes', 'optimisticToggle', 'showNodeIcon', 'style', 'className', 'loading_state'),
        package = 'dashUsefulComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
