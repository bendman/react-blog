import React from 'react';
import { Link } from 'react-router';
import postList from '../shared/post-list';

const HomePage = () => (
  <ol>
    {postList.map((Post, i) => (
      <li key={i}>
        <h4><Link to={`post${i}`}>{Post.title}</Link></h4>
      </li>
    ))}
  </ol>
);

export default HomePage;
