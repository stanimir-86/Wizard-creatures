const express = require('express');
const { PORT } = require('./constants.js');


const app = express();

app.get('/', (req, res) => {
    res.send('Hello home page!');
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));
