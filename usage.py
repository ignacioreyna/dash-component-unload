import dash_component_unload as duc
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
from dash.exceptions import PreventUpdate

app = dash.Dash(__name__)

app.layout = html.Div([
    duc.DashComponentUnload(
        id='before_unload',
    ),
    html.Div(id='output')
])


@app.callback(
    Output('output', 'children'), 
    [Input('before_unload', 'close')]
)
def display_output(close):
    if not close:
        raise PreventUpdate
    return str(close)



if __name__ == '__main__':
    app.run_server(debug=True)
