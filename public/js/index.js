var socket = io();
socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: "Talk@charlesfried.com",
    body: 'Hey, this is Charles'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('New message is available.');
  console.log(message);
});