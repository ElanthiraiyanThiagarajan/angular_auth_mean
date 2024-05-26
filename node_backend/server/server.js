const express = require('express');
var cors = require('cors');


const jwt = require('jsonwebtoken');

require('dotenv').config();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

require('../config/database')

const app = express();


app.use(cors());
app.use(bodyParser.json());


function verifyToken(req, res, next) {

    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token == 'null') {
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, process.env.JWT_SECRET);
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();


}

app.use('/api/user', require('../routes/UserRoute'));
app.use('/api', verifyToken, require('../routes/EventRoute'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});