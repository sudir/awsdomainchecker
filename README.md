<p align="center"><img width=12.5% src="http://sudirlaycoders.com/files/sclogo.png"></p>
<p align="center"><h1>awsdomainapi - v1.0.1</h1></p>
<p align="center"><i><h4>- Query Domain Name availability with node.js via Amazon Web Services SDK for various tld sites. Compatible with any Node.js app, just integrate this into your application.</h4></i></p>


## Basic Overview

Using awsdomainapi is easy, simply export IAM environment variables for route53 access. 
<br>Then integrate this package into your app or simply run this app by typing below:
<br>

## Setup IAM Access for runtme environment
```python
pip install awscli
aws configure
```

## Run App, these are all various ways to run the app.
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

