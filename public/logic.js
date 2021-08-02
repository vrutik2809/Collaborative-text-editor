const socket = io();
const input = document.getElementById('message');
console.log(socket);
input.addEventListener('keyup',()=>{
    socket.emit('message',input.value);
})
socket.on('message',(msg)=>{
    input.value = msg;
})