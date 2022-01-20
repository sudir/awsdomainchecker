<p align="center"><img width=12.5% src="http://sudirlaycoders.com/files/sclogo.png"></p>
<p align="center"><h1>awsdomainchecker - v1.0.4</h1></p>
<p align="center"><i>Query Domain Name availability with node.js via Amazon Web Services SDK. 
<br />Compatible with any Node.js app, just integrate this into your application. This is great for use with dns management, domain reservation services, or more advanced logic.</i></p>


## Basic Overview
[![Awsdomainapi License](https://img.shields.io/badge/Licensed-Sulayman%20Touray-orange.svg)](https://github.com/sudir/awsdomainchecker/blob/master/LICENSE.txt)
[![awsdomainchecker](https://img.shields.io/badge/awsdomainchecker-npm-blue.svg)](https://www.npmjs.com/package/awsdomainchecker)
[![SudirlayCoders](https://img.shields.io/badge/SudirlayCoders-Experts-brightgreen.svg)](http://www.sudirlaycoders.com)
[![Matt Trotter Code Gaurantee](https://img.shields.io/badge/Fully%20Tested-v1.0.4-red.svg)]()


<ul> Required IAM setup
<li> <i>Need to configure IAM credentials with access to route53</i>
</ul> 

<br />
Using awsdomainchecker is easy, simply export IAM environment variables for route53 access, 
<br>require my module <i>(awsdomainchecker)</i> in your app and your all done!

## Setup IAM Access for runtme environment security 
<i>See here for instaling pip - https://pip.pypa.io/en/stable/installing/</i>
<br />
<i>See here for configuring IAM policy for route53 - http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-managing-permissions.html</i>
```bash
pip install awscli
aws configure
```

##### Installing awsdomainchecker: standard npm installation
```bash
npm install awsdomainchecker
```

##### Application integration: In your main app.js file, require this module
```javascript
const awsdomainchecker = require('awsdomainchecker');
```


#### Running awsdomainchecker: After you require the module simply start your app 
<i>Running it is easy, anytime your main app starts awsdomainchecker will auto-start</i>
<i>You should get the returned output:</i>
```bash
awsdomainchecker listening on http://localhost:8135
```


## Making changes to listening port
<i>Locate the node_modules folder where you have my module 'awsdomainchecker', edit the index.js and change listening port</i> 
```javascript
port = 8135;
app.listen(port);
```
## See the neatly coded brains of my index.js
```javascript
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
```
## How to test Domain availability?

#### 
During testing, simply use curl to generate post request only specifying the domain name with top level domain. <i>"domainname.tld"</i>. 
<br />You can add sanitization around this from your application UI side once running. Contributors to this project should also be looking
forward to oauth integration coming soon, in the mean-time security is on you to sanitize for the time being.

```bash
curl -d "DomainName=domain.com" localhost:8135
```

<i>You should get the returned output:</i>
```bash
This Domain is: status <UNAVAILABLE> | <AVAILABLE>
```

<i>More to come soon....</i>
<br />Invented By: <i>Sulayman Touray {C.E.O SudirlayCoders}</i>
