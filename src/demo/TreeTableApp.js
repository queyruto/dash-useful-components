/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { TreeTable } from '../lib';

class TreeTableApp extends Component {

    constructor() {
        super();
        const treetable_nodes = [
            {
                'data': {'name': 'Company A', 'expenses': '60,000',
                        'employees': "8",
                        'contact': 'Nicholas Watson'},
                'height': 32,
            },
            {
                'data': {'name': 'Company B', 'expenses': '70,000',
                        'employees': '5', 
                        'contact': 'Dani Hopkinson'},
                'height': 32,
            },
            {
                'data': {'name': 'Company C', 'expenses': '50,000',
                        'employees': '4',
                        'contact': 'Jacob Ellery'},
                'height': 32,
            },
            {
                'data': {'name': 'Company D', 'expenses': '105,000',
                        'employees': '22',
                        'contact': 'Makenzie Higgs'},
                'children': [
                    {
                        'data': {'name': 'Department 1', 'expenses': '75,000',
                                'employees': '18',
                                'contact': 'Florence Carter'},
                        'children': [
                            {
                                'data': {'name': 'Group alpha', 'expenses': '25,000',
                                        'employees': '8',
                                        'contact': 'Doug Moss'},
                            },
                            {
                                'data': {'name': 'Group beta', 'expenses': '10,000',
                                        'employees': '6',
                                        'contact': 'Camila Devonport'},
                            },
                            {
                                'data': {'name': 'Group gamma', 'expenses': '40,000',
                                        'employees': '4',
                                        'contact': 'Violet Curtis'},
                            }
                        ],
                    },
                    {
                        'data': {'name': 'Department 2', 'expenses': '30,000',
                                'employees': '',
                                'contact': 'Selena Rycroft'},
                        'height': 32,
                    }
                ],
            },
            {
                'data': {'name': 'Company E', 'expenses': '370,000',
                        'employees': '13',
                        'contact': 'Ron Douglas'},
                'height': 32,
            }
        ];

        const treetable_cols = [
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
        ];

        this.state = {
            columns: treetable_cols,
            nodes: treetable_nodes
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div id="treetable">
                <TreeTable
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default TreeTableApp;
