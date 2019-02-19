// Application entrypoint. Actually starts the server.
//const server = require('./server');

// Start the server, detail out what's going on.
// server.start((startError) => {
//   console.log('ok bro');
//   if (startError) {
//     console.log(`An error occurred starting the server: ${startError}`);
//     throw startError;
//   }

//   server.connections.forEach((connection) => {
//     const label = connection.settings.labels[0];
//     const { protocol, host, port } = connection.info;

//     console.log(`${label} running at: ${protocol}://${host}:${port}`);
//   });
// });



var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World express');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://localhost:%s", host, port)
})