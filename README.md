#### node rest api that utilizes [libphonenumber-js](https://github.com/catamphetamine/libphonenumber-js) library to extract phone numbers from submitted resources.

---

##### support

```
GET  /api/phonenumbers/parse/text/{...string...}

POST /api/phonenumbers/parse/file
```

##### getting started

open terminal(command line):

```
$ npm install           // install requierd package dependencies

$ npm start             // start localhost server

$ curl localhost:5000   // works

$ npm test              // start mocha/chai test
```

##### using postman

```
GET     -->  http://localhost:5000/api/phonenumbers/parse/text/Seneca%20Phone%20Number%3A%20416-491-5050%2C6478603041%2Csometexts%2C6478603041
```

```
POST    -->  http://localhost:5000/api/phonenumbers/parse/file

header  -->  content-type: text/plain

encoded -->  form-data

body    --> { "file": "base64.txt" }
```
