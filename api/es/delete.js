var client = require('./connection.js');

client.indices.delete({index: 'caradisiac'},function(err, resp, status) {
  console.log("delete", resp);
});
