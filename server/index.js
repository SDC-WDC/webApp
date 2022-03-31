require('dotenv').config();
const express = require('express');
const axios = require('axios');



let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const api_url = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfc2202'


app.all('/*', (req, res, next) => {

  let targetUrl = api_url + req.url;

  axios({
    method: req.method,
    url: targetUrl,
    data: req.body,
    headers: {
      'Authorization': process.env.API_TOKEN
    }
  })
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });

});


app.listen(process.env.PORT, function() {
  console.log(`listening on port ${process.env.PORT}`);
})