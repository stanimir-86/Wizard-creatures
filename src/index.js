const express = require('express');
const handlebars = require('express-handlebars');
const { PORT } = require('./constants.js');
const path = require('path');
const routes = require('./router');

const app = express();

//Express Config
app.use(express.static(path.resolve(__dirname, './puvlic')));
app.use(express.urlencoded({ extended: false }));

//Handlebars Config
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Routes
app.get('/', (req, res) => {
    res.send('Hello home page!');
});

app.use(routes)

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));
