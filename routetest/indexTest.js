const index = require('./index')//imports file to be super test

const request = require('supertest')
const express = require('express');
const Test = require('supertest/lib/test');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use('/', index);

test('index route works',done=>{ 
    request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect({name: 'Fredo'})
    .expect(200,done)
});

test('testing route works', done =>{
    request(app)
    .post('/tets')
    .type('form')
    .send({item:'hey'})
    .then(()=>{
        request(app)
        .get('/test')
        .expect({array:[hey]},done);
    });
});
