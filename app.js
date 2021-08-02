const express = require('express');
const ejs = require('ejs');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } =  require('socket.io');
const io = new Server(server);

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.json());

server.listen(process.env.PORT || 3000);

app.get('/',(req,res)=>{
    res.render('index',{title : 'Home'});
})

io.on('connection',(socket)=>{
    console.log('user connected');
    socket.on('message',(msg)=>{
        io.emit('message',msg);
    })
    socket.on('disconnect',(socket)=>{
        console.log('user disconnected');
        
    })
})