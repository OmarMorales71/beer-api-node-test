// import modules required
const express = require('express')
const bodyParser = require('body-parser')

// initialization of variables
const app = express()
const port = 3000
// routes included in app
const router = require('./routes/beer.router')

// needed to parse de body to json correctly
// extended true is for non utf-8 simbols
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// use the route of beer
app.use(router)

// get the app to listen in assigned port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
