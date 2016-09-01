import * as React from 'react';
import { render } from 'react-dom';

import './styles.css';
import '!style-loader!css-loader!react-mdl/extra/material.css';
import '!react-mdl/extra/material';

import { Prescoring } from './prescoring/Prescoring';

render( <Prescoring/>, document.getElementById( 'app' ) );
