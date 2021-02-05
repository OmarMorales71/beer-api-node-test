
// model
const Beer = require("../model/Beer.model")

// service

/**
 * Method to get a beer
 * @param {*} req 
 * @param {*} res 
 */
const getBeer = (req, res) => {
    const beer = new Beer('Corona', 'Lager');
    res.status(200).send(beer).json();
}

module.exports = getBeer;