const assert = require('assert');
const request = require('supertest');
const app = require('../blog');

describe('Blog app', function() {
  it('should return 200 OK for GET /', function() {
    return request(app)
      .get('/')
      .expect(200);
  });

  it('should return 404 Not Found for GET /invalid-url', function() {
    return request(app)
      .get('/invalid-url')
      .expect(404);
  });

  it('should return a list of blog posts for GET /blog/', function() {
    return request(app)
      .get('/blog/')
      .expect(200)
      .then(function(response) {
        assert.ok(response.text.includes('Blog Posts'));
        assert.ok(response.text.includes('First blog post'));
        assert.ok(response.text.includes('Second blog post'));
      });
  });

  it('should return the first blog post for GET /blog/1/', function() {
    return request(app)
      .get('/blog/1/')
      .expect(200)
      .then(function(response) {
        assert.ok(response.text.includes('First blog post'));
        assert.ok(response.text.includes('Lorem ipsum dolor sit amet'));
      });
  });

  it('should return the second blog post for GET /blog/2/', function() {
    return request(app)
      .get('/blog/2/')
      .expect(200)
      .then(function(response) {
        assert.ok(response.text.includes('Second blog post'));
        assert.ok(response.text.includes('Sed ut perspiciatis unde omnis iste'));
      });
  });
});
