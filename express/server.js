'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

app.use('/', (req, res) => {
  res.render(path.join(__dirname, '../index.ejs'), {
    title: "Home"
  })
});

// app.get('/', (req, res) => {
//   res.redirect(req.baseUrl + '/home');
// });

router.get('/another', (req, res) => res.json({ route: req.originalUrl }));

router.post('/', (req, res) => res.json({ postBody: req.body }));

// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.set('view engine', 'ejs');
// app.use('/.netlify/functions/server', router);  // path must route to lambda
// app.use('/home', (req, res) => {
//   res.render(path.join(__dirname, '../public/views/index.ejs'), {
//     title: "Home"
//   })
// });
// app.use('/products/websiteplugins', (req, res) => {
//   res.render('../public/views/products/websiteplugins.ejs', {
//     title: "Website Plugins"
//   })
// });

module.exports = app;
module.exports.handler = serverless(app);
