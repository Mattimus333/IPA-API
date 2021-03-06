'use strict';

const SwaggerExpress = require('swagger-express-mw');
const express = require('express')
const app = express();
const cors = require('cors');

const path = require('path');
app.use(express.static(path.join('public')));
app.use(cors());

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) {
    throw err;
  }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port, () => {
    console.log('listening on port ' + port);
  });

});

module.exports = app; // for testing
