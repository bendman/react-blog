import React from 'react';

import Style from './post-base.scss';


const Post = (props) => (
    <article className={Style.wrapper}>
        <header>
            <h2>{props.title}</h2>
            <time>{props.postedDate}</time>
        </header>
        {props.children}
    </article>
);

export default Post;
