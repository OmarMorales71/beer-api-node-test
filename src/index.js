const express = require('express')
const beerController = require('./controller/beer.controller')
const bodyParser = require('body-parser')
const app = express()
const port = 3003
const router = require('./routes/beer.router')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})