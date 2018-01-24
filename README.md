#### node rest api that utilizes [libphonenumber-js](https://github.com/catamphetamine/libphonenumber-js) library to extract phone numbers from submitted resources.

##### support

```
GET --> /api/phonenumbers/parse/text/{...string...}

POST --> /api/phonenumbers/parse/file
```

##### getting started

in the terminal(command line):

```
$ npm install --> to install all requierd package dependencies

$ npm start --> to start localhost server

$ curl localhost:5000 --> works
```

##### Postman

for GET:

```
request url --> http://localhost:5000/api/phonenumbers/parse/text/Seneca%20Phone%20Number%3A%20416-491-5050
```

for POST: 
```
request url --> http://localhost:5000/api/phonenumbers/parse/file

headers --> content-type: text/plain

encoded --> form-data

body --> { "file": "base64.txt" }
```
