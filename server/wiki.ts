const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Wiki home page!")
})

router.get('/home-world', (req, res) => {
    res.send("You found the home world!")
})

module.exports = router
