import React from 'react';
import { Route, IndexRoute, createRoutes } from 'react-router';

import PageWrapper from './components/page-wrapper';
import HomePage from './components/home-page';
import Post1 from './posts/post1';
import Post2 from './posts/post2';

export default createRoutes(
    <Route path="/" component={PageWrapper}>
        <IndexRoute component={HomePage} />
        <Route path="post1" component={Post1} />
        <Route path="post2" component={Post2} />
    </Route>
);
