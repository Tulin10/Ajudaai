const express = require('express');

const app = express();

app.get('/', (req, resp) =>{
    resp.send('Ola Mundo');
});

app.get('/api/v1/user', (req, resp) =>{
    resp.send({nome:'Douglas'});
});

app.listen('8080', () =>{
    console.log('TESTE');

})