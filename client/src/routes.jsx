import React from 'react';
import { Route, IndexRoute, createRoutes } from 'react-router';

import PageWrapper from './components/page-wrapper';
import HomePage from './components/home-page';
import postList from './shared/post-list';


export default createRoutes(
  <Route path="/" component={PageWrapper}>
    <IndexRoute component={HomePage} />
    {postList.map((Post, i) => (
      <Route key={i} path={`post${i}`} component={Post} />
    ))}
  </Route>
);
