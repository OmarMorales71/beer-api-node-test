const Beer = require("../model/Beer.model")

const getBeer = (req, res) => {

    const beer = new Beer('Corona', 'Lager');
    res.status(200).send(beer).json();

}

module.exports = getBeer;