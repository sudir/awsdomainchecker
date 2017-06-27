// Created by: Matthew Trotter C.E.O www.SudirlayCoders.com licensed @sudirlaycoders.com 2017
// Submission of post body params are in consistency with the rules of nodejs Amazon Web Services SDK for route53
const express = require('express');
const fs = require('fs');
const app = express();
const bodyparser = require('body-parser');

// AWS Required 
const AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
AWS.config.apiVersions = {
  route53domains: '2014-05-15',
};


app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());



app.get('/', function(req, res){
    console.log('GET /')

  const html = fs.readFileSync('index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

app.post('/', function(req, res){
    console.log('POST /');
    console.dir(req.body);
const route53domains = new AWS.Route53Domains();
res.writeHead(200, {'Content-Type': 'text/html'});



const params = req.body;
route53domains.checkDomainAvailability(params, function(err, data) {
if (err) console.log(err, err.stack); // an error occurred
else  res.end('This Domain is: ' + data.Availability);
})
 
});
       

port = 8135;
app.listen(port);
console.log('Listening at http://localhost:' + port)

