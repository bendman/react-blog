var express = require('express');
var path = require('path');
var app = express();
var PORT = 5050;

var React = require('react');
var { renderToString } = require('react-dom/server');
var { RouterContext, match } = require('react-router');
var appRoutes = require('../client/src/routes.jsx').default;


app.use(express.static('client/srv'));

app.get('*', function (req, res) {
    match({ routes: appRoutes, location: req.url }, (err, redirectLocation, renderProps) => {
        if (err) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            // You can also check renderProps.components or renderProps.routes for
            // your "not found" component or route respectively, and send a 404 as
            // below, if you're using a catch-all route.

            var reactContent = renderToString(<RouterContext {...renderProps} />);
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
                    <script src="./bundle.js" charset="utf-8"></script>
                </body>
                </html>
            `);
        } else {
            res.status(404).send('Not found')
        }
    });
});

app.listen(PORT, function () {
    console.log(PORT + ' is up and running a server');
});
