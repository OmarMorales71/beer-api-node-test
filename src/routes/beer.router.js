const { Router } = require('express')
const beerController = require('../controller/beer.controller')

const router = new Router();
router.get("/", beerController)

module.exports = router;