import React from 'react';
import ReactDOM from 'react-dom';
import CheckBoxTreeApp from './CheckBoxTreeApp';
import TreeTableApp from "./TreeTableApp";
import CollapsibleTableApp from "./CollapsibleTableApp";

ReactDOM.render(
    <div>
        <h1>CheckBoxTree</h1>
        <CheckBoxTreeApp />
        <hr></hr>
        <h1>TreeTable</h1>
        <TreeTableApp />
        <hr></hr>
        <h1>CollapsibleTable</h1>
        <CollapsibleTableApp />
    </div>
    , document.getElementById('root'));
