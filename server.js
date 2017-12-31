//const postData = require('./application-data.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./backend/api/routes/routes');

const port = process.env.PORT || 3030;
const server = express();


const corsOptions = {
    "origin": "*",
    "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/instagram-posts', { useMongoClient: true });

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use(cors());

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes(server);

// app.get('/postdata', (req, res) => {
// 	res.send(postData);
// });

server.listen(port, () => {
	console.log(`server listening on port ${port}`);
});