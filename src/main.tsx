
import * as React from 'react';
import { render } from 'react-dom';

// import './styles.css';
import '!style-loader!css-loader!react-mdl/extra/material.css';
import '!react-mdl/extra/material';

import { App } from './App.tsx';

render( <App/>, document.getElementById( 'app' ) );
