const jsonfile = require('jsonfile');
var client = require('./connection.js');

jsonfile.readFile('cars.json', function(err, res) {
  if(err) console.error(err);
  else {
    res.forEach((model) => {
      client.index({
        index: 'caradisiac',
        id: model.uuid,
        type: 'model',
        body: model
      },function(err,resp,status) {
          console.log(resp);
      });
    })
  }
})
