var client = require('../../es/connection.js');
var populate = require('../../populate/index.js');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

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

  app.get('/suv/:volumeMax', (req, res) => {
    const volumeMax = req.params.volumeMax;
      client.search({
      index: 'caradisiac',
      type: 'model',
      body: {
        "from" : 0, "size" : 50, 
      	"query": {
      		"range": {
          		"volume": {
          			"lte": volumeMax
          		}
          	}
      	},
          "sort": [
                { "volume":   { "order": "desc" }}
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
