// regular stuff
const express     = require('express');
const logger      = require('morgan');

const app    = express();
const PORT   = process.argv[2] || process.env.port || 3000;

// set up some logging
app.use(logger('dev'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// generic error handler
app.use((err, req, res, next) => {
  console.error(err, next); // next is just here just so the linter doesn't complain
  res.status(500).send('Something broke!');
});

app.get('/admin', (req,res) => res.render('pages/admin'));
app.get('/', (req,res) => res.render('pages/home'));


// Let's go!
app.listen(PORT);
// app.listen(PORT, () => console.log(Object.keys(process.env).sort(), isDev));
