// index the models in elasticsearch (localhost:9200)

const jsonfile = require('jsonfile');
var client = require('../es/connection.js');

module.exports.pop = function() {
  jsonfile.readFile(__dirname+'/cars.json', function(err, res) {
    if(err) console.error(err);
    else {
      res.forEach((model, i) => {
        setTimeout(() => {
          client.index({
            index: 'caradisiac',
            id: model.uuid,
            type: 'model',
            body: model
          },function(err,resp,status) {
            console.log(resp);
          });
        }, i*5)
      })
    }
  })
}
