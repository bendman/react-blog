import React from 'react';

import Post from '../components/post-base';

const articleDefs = {
  title: 'JS Generators for Async',
  postedDate: 'July 2',
};

const Article = () => (
  <Post {...articleDefs}>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.</p>
  </Post>
);

export default Object.assign(Article, articleDefs);
