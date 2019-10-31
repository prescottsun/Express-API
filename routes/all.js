const express = require('express'),
    router = express.Router();

const data = {
    powerRangers: [
        {name: 'Jason', zord: 'T-Rex'},
        {name: 'Billy', zord: 'Triceratops'}
    ]
};

router.get('/', (req, res) => {
    res.status(200)
        .render('template', {
            locals: {
                title: 'A listing of Rangers',
                arrayOfData: data.powerRangers
            },
            partials: {
                partial: 'partial-all'
            }
        });
});

module.exports = router;

