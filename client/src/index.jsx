import React from 'react';
import { render } from 'react-dom';

import { Router, browserHistory } from 'react-router';
import appRoutes from './routes.jsx';

render((
  <Router history={browserHistory} routes={appRoutes} />
), document.getElementById('content'));
