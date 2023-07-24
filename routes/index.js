const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

//anywhere this file is imported will become this
module.exports = router