const express = require('express');
const { PORT } = require('./constants.js');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello home page!');
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));
