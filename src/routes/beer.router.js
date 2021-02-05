// dependencies 
const { Router } = require('express')
// controllers
const beerController = require('../controller/beer.controller')
// initialization
const router = new Router();

// routes section
router.get("/", beerController)

// export
module.exports = router