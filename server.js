const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
// const connection = require('./database/db');
const connection = require('./database/mongoConnection');
const app = express();
const port = 3000;

app.use(cors({origin: '*'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  req.connection = connection;
  next();
});

// route
const router = require('./routes');
app.use('/api', router.user);


app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
