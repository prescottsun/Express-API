const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const app = express();

app.listen(3333, function(){
    console.log('listening on port 3333');
});

app.use(compression());
app.use(helmet());

const data = {
    powerRangers: [
        {name: 'Jason', zord: 'T-Rex'},
        {name: 'Billy', zord: 'Triceratops'}
    ]
};

const rootController = function(req, res) {
    const snippet = `<h1>Hello World!</h1>`;
    res.status(200).send(snippet).end();

};

app.get('/', rootController);

app.get('/all', function(req, res){
    let json = {
        data
    };
    res.status(200).send(json).end();
})

app.get('/wp', function(req, res){
    const { name } = req.query;
    let snippet = `<h1>Hello ${name}</h1>`;
    
    if (!name) {
        snippet = `<h1>No Name Provided</h1>`;
        res.status(500).send(snippet).end();
    }
    res.status(200).send(snippet);
});

app.get('/year', function(req, res){
    const {age} = req.query;
    let yearBorn = 2019 - age;
    res.send(`You were born in ${yearBorn}`);
});

app.get('/greet/:name', function(req, res){
    let snippet = `<h1>Hello, ${req.params.name}!</h1>`;

    res.status(200).send(snippet).end();
})

app.get('/cats', function(req, res){
    const snippet = `<h1>Meow</h1>`;
    res.status(200).send(snippet).end();
});

app.get('/dogs', function(req, res){
    const snippet = `<h1>Woof</h1>`;
    res.status(200).send(snippet).end();
});

app.get('/cats_and_dogs', function(req, res){
    const snippet = `<h1>Living together</h1>`;
    res.status(200).send(snippet).end();
});
debugger;