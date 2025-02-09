import express from 'express';
import router from './api-router';
const server=express();
server.use(express.static('dist'))
server.use('/apis',router);
server.set('view engine','ejs');
server.use('/',(req,res)=>{
    res.render('index');
})

server.listen('4004','localHost',()=>{
    console.log(`Server running at http://localHost:4004`)
});