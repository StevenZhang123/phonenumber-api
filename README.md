#### node rest api that utilizes [libphonenumber-js](https://github.com/catamphetamine/libphonenumber-js) library to extract phone numbers from submitted resources.

---

#### support

```
GET  /api/phonenumbers/parse/text/{...string...}

POST /api/phonenumbers/parse/file
```

#### getting started

open terminal(command line):

```
$ npm install           // install requierd package dependencies

$ npm start             // start localhost server

$ curl localhost:5000   // will print "works"

$ npm test              // start mocha/chai test
```

#### using http client

```
GET     -->  http://localhost:5000/api/phonenumbers/parse/text/Seneca%20Phone%20Number%3A%20416-491-5050%2C6478603041%2C647-860-3041
```

```
POST    -->  http://localhost:5000/api/phonenumbers/parse/file

header  -->  content-type: multipart/form-data

body    -->  expect a key-value pair, upload the base64.txt as value, and set string "file" as key

```

#### using curl
```
GET     --> curl localhost:5000/api/phonenumbers/parse/text/Seneca%20Phone%20Number%3A%20416-491-5050%2C6478603041%2C647-860-3041 

POST    --> curl -F file=@base64.docx localhost:5000/api/phonenumbers/parse/file
```
