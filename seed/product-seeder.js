var Product = require('../models/product');

var mongoose = require('mongoose');

var databaseUrl = 'mongodb://localhost:27017/shopping';

mongoose.connect(databaseUrl, {useNewUrlParser: true});

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title : 'Gothic Video Game',
        description : 'Gothic Awesome Game!!!!',
        price : 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title : 'StartCraft Video Game',
        description : 'StartCraft Awesome Game!!!!',
        price : 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title : 'Roa Video Game',
        description : 'Roa Awesome Game!!!!',
        price : 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title : 'WOW Video Game',
        description : 'WOW Awesome Game!!!!',
        price : 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title : 'Bubble Bubble Video Game',
        description : 'Bubble Awesome Game!!!!',
        price : 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title : 'Avoid Dung Video Game',
        description : 'Avoid Dung Awesome Game!!!!',
        price : 10
    })
];

var done = 0;

for (var i=0; i<products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}