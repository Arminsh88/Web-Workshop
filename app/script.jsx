import React from 'react';
import {render} from 'react-dom';

import Hello from './hello.jsx'


render(<Hello data={'Armin'}/>, document.getElementById('container'));
