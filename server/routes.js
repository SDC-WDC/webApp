const axios = require('axios');
const router = require('express').Router();

const joshURL = 'http://44.204.94.11:5005';
const kunURL = 'http://50.18.22.164:5005';
const qiURL = 'http://3.215.63.203:3504';

// Connect methods to their corresponding routes

// -> shop.com/products/66644/styles

router.get('/products*', (req, res) => {
  // console.log(joshURL + req.originalUrl);
  axios.get(joshURL + req.originalUrl)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.use('/qa*', (req, res) => {
  axios({
    method: req.method,
    url: kunURL + req.originalUrl,
    data: req.body,
    headers: {
      Authorization: process.env.API_TOKEN,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.use('/reviews*', (req, res) => {
  axios({
    method: req.method,
    url: qiURL + req.originalUrl,
    data: req.body,
    headers: {
      Authorization: process.env.API_TOKEN,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
