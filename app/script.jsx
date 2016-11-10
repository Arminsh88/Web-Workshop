import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexRoute} from 'react-router'



import Hello from './hello.jsx'
import TMP from './tmp.jsx'



// render(<Hello a={6} b = {5}/>, document.getElementById('container'));

render(
    <Router>
        <Route path="/" component={Hello}></Route>
        <Route path="login" component={TMP}></Route>
        <Route path="*" component={noMatch}></Route>
    </Router>
)