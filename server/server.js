const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './../public')
var app = express();
var server = http.createServer(app);
var io = socketIo(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: "Charles Fried",
    text: "Hey what's up?",
    createdAt: new Date()
  });

  socket.on('createMessage', (newEmail) => {
    newEmail.createdAt = new Date();
    console.log('newEmail', newEmail);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});



server.listen(port, () => console.log(`App running on port ${port}`));