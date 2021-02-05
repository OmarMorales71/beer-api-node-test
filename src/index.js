const express = require('express')
const app = express()
const PORT = 3003


const bodyParser = require('body-parser')
const router = require('./routes/beer.router')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
