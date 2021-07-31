'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('../server');

test('health check', function(t){
  request(app)
    .get('/health')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});

test('index page check', function(t){
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error');
      t.end();
    });
});
