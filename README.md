<p align="center"><img width=12.5% src="http://sudirlaycoders.com/files/sclogo.png"></p>
<p align="center"><h1>awsdomainapi - v1.0.1</h1></p>
<p align="center"><i>Query Domain Name availability with node.js via Amazon Web Services SDK. Compatible with any Node.js app, just integrate this into your application.
<br />This is great for use with dns management, domain reservation services, or more advanced logic.</i></p>


## Basic Overview
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/sudir/awsdomainapi/blob/master/LICENSE.txt)
[![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)](https://www.npmjs.com/package/awsdomainapi)
[![CircleCI](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg)](https://github.com/sudir/awsdomainapi)
[![SudirlayCoders](https://img.shields.io/badge/SudirlayCoders-Experts-brightgreen.svg)](http://www.sudirlaycoders.com)
Using awsdomainapi is easy, simply export IAM environment variables for route53 access. 
<br>Then integrate/install package into your app, then simply run this app by typing below:
<br>

## Setup IAM Access for runtme environment: 
<i>See here for instaling pip - https://pip.pypa.io/en/stable/installing/</i>
```
pip install awscli
aws configure
```

##### Install awsdomainapi, in the same directory where awsdomainapi is located type:
```
npm install awsdomainapi
```

## How to start running App, these are all various ways to run the app. 
<i>See more on forever - https://github.com/foreverjs/forever</i>
```
node index.js
forever start index.js
```
<br>

## How to test Domain availability?

#### 
During testing, enter only the <i>"domainname.tld"</i>. You can add sanitization around this from your application UI side.
Once running

```
curl -d "DomainName=domain.com" localhost:8135
```
The End - Invented By: <mark>Matthew Trotter {C.E.O SudirlayCoders}</mark>
