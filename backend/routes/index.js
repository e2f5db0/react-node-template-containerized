const path = require('path')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/build/index.html'))
    res.status(200).send('Backend running!');
})

router.get('/health', (req, res) => {
    res.send('ok')
})

module.exports = router;
