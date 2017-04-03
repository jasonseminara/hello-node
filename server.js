// regular stuff
const express     = require('express');
const logger      = require('morgan');

const app    = express();

function checkMinVersion(minVersion) {
  const greaterThanMin = (x,i) => (minVersion[i] <= +x);
  // get the node version in numbers
  if (!process.version.split(/\D/).filter(x=>x).every(greaterThanMin)) {
    throw `unsupported version! Update Node to v${minVersion.join('.')} to proceed. Current version: ${process.version}`

  }
}


// set up some logging
app.use(logger('dev'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// MAKE SURE we're using 8081
app.set('port', process.argv[2] || process.env.PORT || 8081);

// generic error handler
app.use((err, req, res, next) => {
  console.error(err, next); // next is just here just so the linter doesn't complain
  res.status(500).send('Something broke!');
});

app.get('/admin', (req,res) => res.render('pages/admin'));
app.get('/', (req,res) => res.render('pages/home'));


// Let's go!
app.listen(app.settings.port, ()=>checkMinVersion([7,6,0]));
// app.listen(PORT, () => console.log(Object.keys(process.env).sort(), isDev));
