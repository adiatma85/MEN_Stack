const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({"message": "Selamat datang Di Web server nodejs dan mongoDB"});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});