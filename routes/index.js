const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.status(200)
        .render('template', {
            locals: {
                title: 'Welcome!'
            },
            partials: {
                partial: 'partial-index'
            }
        });
});

module.exports = router;