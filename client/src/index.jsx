import React from 'react';
import { render } from 'react-dom';

import { Router, browserHistory, match } from 'react-router';
import appRoutes from './routes.jsx';

// Use `match` on the client because we need to wait for full route resolution
// before the first render, otherwise it will render the PageWrapper without the
// asynchronously resolved routes and React will attempt to use markup in the
// page which doesn't match the (synchronously resolved) server response.
// https://github.com/reactjs/react-router/issues/2036
match(
  {
    routes: appRoutes,
    history: browserHistory,
  },
  (err, redirectLocation, renderProps) => {
    render((
      <Router {...renderProps} />
    ), document.getElementById('content'));
  }
);
