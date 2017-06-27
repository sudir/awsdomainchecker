<p align="center"><img width=12.5% src="http://sudirlaycoders.com/files/sclogo.png"></p>
<p align="center"><h1>awsdomainapi - v1.0.1</h1></p>
<p align="center"><i>Query Domain Name availability with node.js via Amazon Web Services SDK. Compatible with any Node.js app, just integrate this into your application.
<br />This is great for use with dns management, domain reservation services, or more advanced logic.</i></p>


## Basic Overview

Using awsdomainapi is easy, simply export IAM environment variables for route53 access. 
<br>Then integrate this package into your app or simply run this app by typing below:
<br>

## Setup IAM Access for runtme environment
```
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
The End - Invented By:
 __  __       _   _   _                     _____          _   _            
|  \/  | __ _| |_| |_| |__   _____      __ |_   _| __ ___ | |_| |_ ___ _ __ 
| |\/| |/ _` | __| __| '_ \ / _ \ \ /\ / /   | || '__/ _ \| __| __/ _ \ '__|
| |  | | (_| | |_| |_| | | |  __/\ V  V /    | || | | (_) | |_| ||  __/ |   
|_|  |_|\__,_|\__|\__|_| |_|\___| \_/\_/     |_||_|  \___/ \__|\__\___|_|   
