import dash_useful_components as duc
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
from dash.exceptions import PreventUpdate

app = dash.Dash(__name__)

checkboxtree_nodes = [
    {
        "value": "N1",
        "label": "ParentOne",
        "children": [
            {
                "value": "N1.1",
                "label": "SectionOneChild",
                "children": [
                    {
                        "value": "N1.1.1",
                        "label": "SectionOneChil-of-Child-1",
                        "children": [
                            {
                                "value": "C1",
                                "label": "SectionOneChil-of-Child-1-of-Child"
                            }
                        ]
                    },
                    {
                        "value": "C2",
                        "label": "SectionOneChil-of-Child-2"
                    }
                ]
            },
            {
                "value": "N1.2",
                "label": "SectionTwo",
                "children": [
                    {
                        "value": "C3",
                        "label": "SectionTwo-Child"
                    }
                ]
            }
        ]
    },
    {
        "value": "P2",
        "label": "ParentTwo",
        "children": [
            {
                "value": "C5",
                "label": "ParentTwo-Child-1"
            },
            {
                "value": "C6",
                "label": "ParentTwo-Child-2"
            }
        ]
    }
]

treetable_nodes = [
    {
        'data': {'name': 'Company A', 'expenses': '60,000',
                 'employees': "8",
                 'contact': 'Nicholas Watson'},
        'height': 32,
    },
    {
        'data': {'name': 'Company B', 'expenses': '70,000',
                 'employees': '5',  # dcc.Slider(min=0, max=30, step=1, value=5),
                 'contact': 'Dani Hopkinson'},
        'height': 32,
    },
    {
        'data': {'name': 'Company C', 'expenses': '50,000',
                 'employees': '4',  # dcc.Slider(min=0, max=30, step=1, value=4),
                 'contact': 'Jacob Ellery'},
        'height': 32,
    },
    {
        'data': {'name': 'Company D', 'expenses': '105,000',
                 'employees': '22',  # dcc.Slider(min=0, max=30, step=1, value=22),
                 'contact': 'Makenzie Higgs'},
        'children': [
            {
                'data': {'name': 'Department 1', 'expenses': '75,000',
                         'employees': '18',  # dcc.Slider(min=0, max=30, step=1, value=18),
                         'contact': 'Florence Carter'},
                'children': [
                    {
                        'data': {'name': 'Group alpha', 'expenses': '25,000',
                                 'employees': '8',  # dcc.Slider(min=0, max=30, step=1, value=8),
                                 'contact': 'Doug Moss'},
                    },
                    {
                        'data': {'name': 'Group beta', 'expenses': '10,000',
                                 'employees': '6',  # dcc.Slider(min=0, max=30, step=1, value=6),
                                 'contact': 'Camila Devonport'},
                    },
                    {
                        'data': {'name': 'Group gamma', 'expenses': '40,000',
                                 'employees': '4',  # dcc.Slider(min=0, max=30, step=1, value=4),
                                 'contact': 'Violet Curtis'},
                    }
                ],
            },
            {
                'data': {'name': 'Department 2', 'expenses': '30,000',
                         'employees': '',  # dcc.Slider(min=0, max=30, step=1, value=4),
                         'contact': 'Selena Rycroft'},
                'height': 32,
            }
        ],
    },
    {
        'data': {'name': 'Company E', 'expenses': '370,000',
                 'employees': '13',  # dcc.Slider(min=0, max=30, step=1, value=13),
                 'contact': 'Ron Douglas'},
        'height': 32,
    }
]

treetable_cols = [
    {
        'label': "Name",
        'property': 'name',
    },
    {
        'label': "Expenses",
        'property': 'expenses',
    },
    {
        'label': "Employees",
        'property': 'employees',
    },
    {
        'label': "Contact",
        'property': 'contact',
    },
]

# dcc.Slider(min=0, max=30, step=1, value=5)
cells = [
    html.Td("60,000"), html.Td(dcc.Slider(min=0, max=30, step=1, value=5)),
    html.Td("70,000"), html.Td("5"),
    html.Td("105,000"), html.Td("4"),
    html.Td("55,000"), html.Td("3"), html.Td('Florence Carter'),
    html.Td("40,000"), html.Td("5"), html.Td('Doug Moss'),
    html.Td("10,000"), html.Td("4"), html.Td('Camila Devonport'),
    html.Td("5,000"), html.Td("2"), html.Td('Violet Curtis'),
    html.Td("50,000"), html.Td("8"), html.Td('Selena Rycroft'),
    html.Td("40,000"), html.Td("6"),
]
rowHeaders = ["Company A", "Company B", "Company C", "Department 1", "Group alpha", "Group beta", "Group gamma", "Departement 2", "Company D"]
levels = [1, 1, 1, 2, 3, 3, 3, 2, 1]
nbCols = [2, 2, 2, 3, 3, 3, 3, 3, 2]
header = html.Thead(html.Tr([html.Th("Name"), html.Th("Expenses"), html.Th("Employees"), html.Th("Contact")]))
body = duc.CollapsibleTableBody(children=cells, nbCols=nbCols, rowLevels=levels, rowHeaders=rowHeaders)

app.layout = html.Div([
    html.H1("CheckBoxTree"),
    html.Div(duc.CheckBoxTree(id="cb_input", nodes=checkboxtree_nodes, showNodeIcon=False)),
    html.Div([
        dcc.Checklist(
            id='options',
            options=[
                {'label': 'Disabled', 'value': 'disabled'},
                {'label': 'Expand Disabled', 'value': 'expandDisabled'},
                {'label': 'Expand on click', 'value': 'expandOnClick'},
                {'label': 'No cascade', 'value': 'noCascade'},
                {'label': 'Only Leaf Checkboxes', 'value': 'onlyLeafCheckboxes'},
                {'label': 'Optimistic Toggle', 'value': 'optimisticToggle'},
                {'label': 'Show Nodes Icons', 'value': 'showNodeIcon'},
            ],
            value=['optimisticToggle', 'showNodeIcon']
        )
    ]),
    html.Div(id='checked-output'),
    html.Div(id='expanded-output'),
    html.Hr(),
    html.H1("TreeTable"),
    html.Div(duc.TreeTable(id="tt_input", columns=treetable_cols, nodes=treetable_nodes)),
    html.Hr(),
    html.H1("Collapsible Table"),
    html.Div(html.Table(id="ct_input", children=[header, body]))
])


@app.callback(
    [Output('checked-output', 'children'),
     Output('expanded-output', 'children')],
    [Input('cb_input', 'checked'),
     Input('cb_input', 'expanded')])
def display_output(checked, expanded):
    if checked and len(checked) > 0:
        res1 = 'You have checked {}'.format(' '.join(checked))
    else:
        res1 = 'No node is checked'

    if expanded and len(expanded) > 0:
        res2 = 'You have expanded {}'.format(' '.join(expanded))
    else:
        res2 = 'No node is expanded'

    return [res1, res2]


@app.callback(
    [Output('cb_input', 'disabled'),
     Output('cb_input', 'expandDisabled'),
     Output('cb_input', 'expandOnClick'),
     Output('cb_input', 'noCascade'),
     Output('cb_input', 'onlyLeafCheckboxes'),
     Output('cb_input', 'optimisticToggle'),
     Output('cb_input', 'showNodeIcon')],
    [Input('options', 'value')]
)
def configure_display(value):
    list_options = ['disabled',
                    'expandDisabled',
                    'expandOnClick',
                    'noCascade',
                    'onlyLeafCheckboxes',
                    'optimisticToggle',
                    'showNodeIcon']
    if value:
        return [list_option in value for list_option in list_options]
    else:
        raise PreventUpdate


if __name__ == '__main__':
    app.run_server(debug=True)
