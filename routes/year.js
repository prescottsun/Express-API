const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    const {age} = req.query;
    let yearBorn = 2019 - age;
    res.send(`You were born in ${yearBorn}`);
});

module.exports = router;