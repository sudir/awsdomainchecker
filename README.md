<p align="center"><img width=12.5% src="http://sudirlaycoders.com/files/sclogo.png"></p>
<p align="center"><h1>awsdomainapi - v1.2.2</h1></p>
<p align="center"><i>Query Domain Name availability with node.js via Amazon Web Services SDK. 
<br />Compatible with any Node.js app, just integrate this into your application. This is great for use with dns management, domain reservation services, or more advanced logic.</i></p>


## Basic Overview
[![Awsdomainapi License](https://img.shields.io/badge/Licensed-Matt%20Trotter-orange.svg)](https://github.com/sudir/awsdomainapi/blob/master/LICENSE.txt)
[![awsdomainapi](https://img.shields.io/badge/awsdomainapi-npm-blue.svg)](https://www.npmjs.com/package/awsdomainapi)
[![SudirlayCoders](https://img.shields.io/badge/SudirlayCoders-Experts-brightgreen.svg)](http://www.sudirlaycoders.com)
[![Matt Trotter Code Gaurantee](https://img.shields.io/badge/Fully%20Tested-v1.2.2-red.svg)]()

<br />
Using awsdomainapi is easy :stuck_out_tongue_winking_eye:, simply export IAM environment variables for route53 access, 
<br>require my module <i>(awsdomainapi)</i> in your app and your all done!

## Setup IAM Access for runtme environment security 
<i>See here for instaling pip - https://pip.pypa.io/en/stable/installing/</i>
```bash
pip install awscli
aws configure
```

##### Installing awsdomainapi: standard npm installation
```bash
npm install awsdomainapi
```

##### Application integration: In your main app.js file, require this module
```javascript
const awsdomainapi = require('awsdomainapi');
```

## Making changes to listening port
<i>Locate the node_modules folder where you have my module 'awsdomainapi', edit the index.js and change listening port</i> 
```javascript
port = 8135;
app.listen(port);
```

## How to test Domain availability?

#### 
During testing, simply use curl to generate post request only specifying the domain name with top level domain. <i>"domainname.tld"</i>. 
<br />You can add sanitization around this from your application UI side once running. Contributors to this project should also be looking
forward to oauth integration coming soon, in the mean-time security is on you to sanitize for the time being.

```
curl -d "DomainName=domain.com" localhost:8135
```

<i>More to come soon....</i>
<br />Invented By: <i>Matthew Trotter {C.E.O SudirlayCoders}</i>
