const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/about.html'))
})
app.get('/music',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/music.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/contact.html'))
})

app.listen(4010,()=>console.log('servidor corriendo en puerto 4010'))