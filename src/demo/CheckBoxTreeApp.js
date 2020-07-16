/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { CheckBoxTree } from '../lib';

class CheckBoxTreeApp extends Component {

    constructor() {
        super();
        const checkboxtree_nodes = [
            {
                "value": "P1",
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
        this.state = {
            nodes: checkboxtree_nodes,
            showNodeIcon: false
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div id="checkboxtree">
                <CheckBoxTree
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default CheckBoxTreeApp;
