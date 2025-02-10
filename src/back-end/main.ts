import express from 'express';
import path from 'path';
import router from './api-router';
import ngrok from '@ngrok/ngrok';
import ngrokConf from './ngrok.conf';
import userInsta from './metaapis';
import 'dotenv/config';
const server=express();
server.use(express.static('dist'))
server.use('/apis',router);
server.set('views',path.join(__dirname+`/../UI/views`));
server.set('view engine','ejs');
server.use('/',(req,res)=>{
    let data=req.params;
    console.log(data);
    res.render('index');
});
server.listen(4004,'localHost',()=>{
    console.log(`Server running at http://localHost:4004`)
});
if (process.env.ONLINE=='X'){
ngrok.connect({
    addr:4004,
    authtoken:ngrokConf.auth_token
}).then(listner=>{
    console.log(`Internet endpoint - ${listner.url()}`);
});
}