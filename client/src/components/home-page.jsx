import React from 'react';
import { Link } from 'react-router';

import postList from '../shared/post-list';


const HomePage = () => (
  <ol>
    {Object.entries(postList).map(([path, definition]) => (
      <li key={path}>
        <h4><Link to={path}>{definition.title}</Link></h4>
      </li>
    ))}
  </ol>
);

export default HomePage;
