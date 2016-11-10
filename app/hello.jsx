import React from 'react';
import {render} from 'react-dom';

var Hello = React.createClass({

    getInitialState:function () {
       return {name:[]}
    },

    componentWillMount:function () {
        this.state.name = this.props.data;
    },


    render:function () {
        return(<p>{this.props.a + this.props.b} </p>)

    }
});

export default Hello