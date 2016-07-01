import React from 'react';
import { Link } from 'react-router';

import Style from './page-wrapper.scss';


const PageWrapper = (props) => {
    return (
        <div className={Style.wrapper}>
            <header className={Style.header}>
                <h1 className={Style.main_title}><Link to="/">Blog</Link></h1>
                <nav>
                    <ul>
                        <li><Link to="post1">Post 1</Link></li>
                        <li><Link to="post2">Post 2</Link></li>
                    </ul>
                </nav>
            </header>
            <main className={Style.main}>{props.children}</main>
        </div>
    );
};

export default PageWrapper;
