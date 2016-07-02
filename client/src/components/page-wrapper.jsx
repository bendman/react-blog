import React from 'react';
import { Link } from 'react-router';

import Style from './page-wrapper.scss';


const PageWrapper = (props) => (
  <div className={Style.wrapper}>
    <header className={Style.header}>
      <h1 className={Style.main_title}><Link to="/">Blog</Link></h1>
    </header>
    <main className={Style.main}>{props.children}</main>
  </div>
);
PageWrapper.propTypes = {
  children: React.PropTypes.any,
};

export default PageWrapper;
