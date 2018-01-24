var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('./app');
var expect = chai.expect;
chai.use(chaiHttp);
var fs = require('fs');

describe("testing API endpoints:", function(){
  describe("GET /", function(){
    it("it should return status 200", function(done){
      chai.request(app)
          .get('/')
          .end(function(err, res){
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
    });
  });

  describe("GET /api/phonenumbers/parse/text/", function() {
    it("it should return an empty list []", function(done) {
      chai.request(app)
        .get('/api/phonenumbers/parse/text/')
        .end(function(err, res){
          expect(res).to.have.status(400);
          expect(res.body).to.be.an('array').that.is.empty;
          done();
        });
    });
  });
  
  describe("GET /api/phonenumbers/parse/text/nothing", function() {
    it("it should return an empty list []", function(done) {
      chai.request(app)
        .get('/api/phonenumbers/parse/text/nothing')
        .end(function(err, res){
          expect(res).to.have.status(400);
          expect(res.body).to.be.an('array').that.is.empty;
          done();
        });
    });
  });

  describe("GET /api/phonenumbers/parse/text/Seneca%20Phone%20Number%3A%20416-491-5050%2C6478603041%2C647-860-3041", function() {
    it("it should return list [\"(416) 491-5050\", \"(647) 860-3041\"]", function(done) {
      chai.request(app)
        .get('/api/phonenumbers/parse/text/Seneca%20Phone%20Number%3A%20416-491-5050%2C6478603041%2C647-860-3041')
        .end(function(err, res){
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.have.lengthOf(2);
          expect(res.body).to.be.an('array').that.include("(416) 491-5050", "(647) 860-3041");
          done();
        });
    });
  });

  describe("POST /api/phonenumbers/parse/file", function() {
    it("it should return list [\"(416) 491-5050\", \"(647) 860-3041\"]", function(done) {
      chai.request(app)
        .post('/api/phonenumbers/parse/file')
        .set('content-type', 'text/plain')
        .attach('file', fs.readFileSync('base64.txt'), 'base64.txt')
        .end(function(err, res){
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.have.lengthOf(2);
          expect(res.body).to.be.an('array').that.include("(416) 491-5050", "(647) 860-3041");
          done();
        });
    });
  });
});
