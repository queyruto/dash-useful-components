/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { CollapsibleTableBody } from '../lib';

class CollapsibleTableApp extends Component {

    constructor() {
        super();

        const cells = [
            <td key="1.1">60,000</td>, <td key="1.2"><input type="range" min="1" max="10" value="5"></input></td>,
            <td key="2.1">70,000</td>, <td key="2.2"><input type="range" min="1" max="10" value="5"></input></td>,
            <td key="3.1">105,000</td>, <td key="3.2"><input type="range" min="1" max="10" value="4"></input></td>,
            <td key="4.1">50,000</td>, <td key="4.2"><input type="range" min="1" max="10" value="8"></input></td>, <td key="4.3">Selena Rycroft</td>,
            <td key="5.1">55,000</td>, <td key="5.2"><input type="range" min="1" max="10" value="3"></input></td>, <td key="5.3">Florence Carter</td>,
            <td key="6.1">40,000</td>, <td key="6.2"><input type="range" min="1" max="10" value="5"></input></td>, <td key="6.3">Doug Moss</td>,
            <td key="7.1">10,000</td>, <td key="7.2"><input type="range" min="1" max="10" value="4"></input></td>, <td key="7.3">Camila Devonport</td>,
            <td key="8.1">5,000</td>, <td key="8.2"><input type="range" min="1" max="10" value="2"></input></td>, <td key="8.3">Violet Curtis</td>,
            <td key="9.1">40,000</td>, <td key="9.2"><input type="range" min="1" max="10" value="6"></input></td>
        ]
        const rowHeaders = ["Company A", "Company B", "Company C", "Departement 2", "Department 1", "Group alpha", "Group beta", "Group gamma", "Company D"]
        const levels = [1, 1, 1, 2, 2, 3, 3, 3, 1]
        const nbCols = [2, 2, 2, 3, 3, 3, 3, 3, 2]

        this.state = {
            children: cells,
            nbCols: nbCols,
            rowLevels: levels,
            rowHeaders: rowHeaders
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        const header = <thead><tr><th>Name</th><th>Expenses</th><th>Employees</th><th>Contact</th></tr></thead>
        return (
            <div id="treetable">
                <table>
                    {header}
                    <CollapsibleTableBody
                        setProps={this.setProps}
                        {...this.state}
                    />
                </table>
            </div>
        )
    }
}

export default CollapsibleTableApp;
        
