const express = require('express');
const handlebars = require('express-handlebars');
const { PORT, connectionString } = require('./constants');
const path = require('path');
const routes = require('./router');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/authMiddleware');

const app = express();

//Express Config
app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));//config body parser
app.use(cookieParser());
app.use(auth);

//Handlebars Config
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Database Connection
async function dbConnect() {
    await mongoose.connect(connectionString);
}

dbConnect()
    .then(() => {
        console.log('Successfully connected to the database');
    })
    .catch(err => console.log(`Error while connecting to the DB.Error: ${err}`));

//Routes


app.use(routes)

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));
