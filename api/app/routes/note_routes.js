var client = require('../../es/connection.js');
var populate = require('../../populate/index.js');

module.exports = function(app) {
  app.get('/populate', (req, res) => {
    populate.pop();
    res.send({'populate': 'done'})
  });

  app.get('/suv', (req, res) => {
      client.search({
      index: 'caradisiac',
      type: 'model',
      body: {
        "sort": [
          { "volume":   { "order": "desc" }},
        ]
      }
    },function (error, response, status) {
        if (error){
          res.send({'search error': error})
        }
        else {
          res.send(response.hits.hits)
        }
    });
  });
};
