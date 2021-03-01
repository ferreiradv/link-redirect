const express = require('express');
const app = express();
const mongoose = require('mongoose');
const linkRouter = require('./routes/linkRouter');

mongoose.connect('mongodb://localhost/link', { useNewUrlParser: true }, { useUnifiedTopology: true }  )

const db = mongoose.connection;

db.on('error',()=>{console.log('houve um erro');});

db.once('open',()=>{console.log('banco carregado');});

app.use('/',linkRouter)

app.listen(5000,()=>{
    console.log('Server running on port 5000');
});