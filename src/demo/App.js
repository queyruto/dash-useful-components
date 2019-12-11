/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { CheckBoxTree } from '../lib';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        const nodes = [{
            value: 'mars',
            label: 'Mars',
            children: [
                { value: 'phobos', label: 'Phobos' },
                { value: 'deimos', label: 'Deimos' },
            ],
        }];
        return (
            <div>
                <CheckBoxTree
                    nodes={nodes}
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
