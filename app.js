
const express = require('express');
const app = express();
const socket = require('socket.io');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/albums'));
app.use(require('./routes/videos'));
app.use(require('./routes/feedback'));
app.use(require('./routes/chat'));


let server = app.listen(port, ()=>{
    console.log("Site is running");
})

let io =socket(server)

// listening for client messages

io.on('connection', socket=>{
    socket.on('postMessage', msgClient=>{

        io.emit('updateMessage', msgClient) //Broadcasts back out to all clients
    })
})