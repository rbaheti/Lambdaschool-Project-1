const postData = require('./application-data.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/postdata', (req, res) => {
	res.send(postData);
});

app.listen(5000, () => {
	console.log('server listening on port 5000');
});