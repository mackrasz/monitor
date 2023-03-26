var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/api/parameters', function (req, res){

   setTimeout(()=>
   {
      var parameters = getParameters();

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(parameters));
   }, 1000);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

function getParameters()
{
   var parameters = {
      'temp': 15 + Math.floor(Math.random() * 15),
      'humid': 30 + Math.floor(Math.random() * 20)
   }

   return parameters;
}