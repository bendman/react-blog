require('babel-core/register');
require('babel-polyfill');

import express from 'express';
const app = express();
const PORT = 5050;

import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import appRoutes from '../client/src/routes.jsx';


app.use(express.static('client/srv'));

app.get('*', (req, res) => {
  match({ routes: appRoutes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.

      const reactContent = renderToString(<RouterContext {...renderProps} />);
      res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>Blog</title>
            <link rel="stylesheet" href="./styles.bundle.css" />
          </head>
          <body>
            <div id="content">${reactContent}</div>
            <script src="./common.bundle.js" charset="utf-8"></script>
            <script src="./main.bundle.js" charset="utf-8"></script>
          </body>
        </html>
      `);
    } else {
      res.status(404).send('Not found');
    }
  });
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running a server`); // eslint-disable-line no-console
});
