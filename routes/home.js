const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        "title": "Okestra API",
        "message": "Disrupting projects delivery"
    });
});

module.exports = router;