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

  socket.on('createMessage', (newEmail) => {
    console.log('newEmail', newEmail);
    io.emit('newMessage', {
      from: newEmail.from,
      body: newEmail.body,
      createdAt: new Date()
    });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});



server.listen(port, () => console.log(`App running on port ${port}`));