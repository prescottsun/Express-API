const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    let snippet = `<h1>Hello, ${req.params.name}!</h1>`;

    res.status(200).send(snippet).end();
});

module.exports = router;