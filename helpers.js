//const mitm = require('mitm')()

// mitm.on("request", function(req, res) {
//   var data = [];
//   req.on('data', (chunk) => {
//     data.push(chunk);
//   }).on('end', function() {
//     var buffer = Buffer.concat(data);
//     var json = buffer.toString('utf8');
//     console.log(json);
//   })
// })