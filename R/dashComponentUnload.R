# AUTO GENERATED FILE - DO NOT EDIT

dashComponentUnload <- function(id=NULL, close=NULL) {
    
    props <- list(id=id, close=close)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashComponentUnload',
        namespace = 'dash_component_unload',
        propNames = c('id', 'close'),
        package = 'dashComponentUnload'
        )

    structure(component, class = c('dash_component', 'list'))
}
