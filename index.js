const express = require('express');
const app = express();
const mongoose = require('mongoose');
const linkRouter = require('./routes/linkRouter');
const path = require('path');

mongoose.connect('mongodb://localhost/link', { useNewUrlParser: true }, { useUnifiedTopology: true }  )

const db = mongoose.connection;

db.on('error',()=>{console.log('houve um erro');});
db.once('open',()=>{console.log('banco carregado');});

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'templates'));

app.use('/',linkRouter)

app.listen(5000,()=>{
    console.log('Server running on port 5000');
});