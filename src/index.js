const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const db = require('./config/db')
const app = express();
const router = require('./routes/index.js');

const port = 3000;

//http logger
app.use(morgan('combined'));

// set defaults localhost path
app.use(express.static(path.join(__dirname, 'public')));

//connect to database
db.connect();

//req.body
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

//template engine handle bars
app.engine('hbs', hbs({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources' , 'views'));


// app.get('/', (req, res) => {
//     res.render('home');
// })

router(app);

app.listen(port,() =>{
  console.log(`App listening at http://localhost:${port}`)
});
