const socket = io(); // gives access to web socket api

//grab from dom
let chatUserName = document.querySelector('#chat-username')
let chatMessage = document.querySelector('#chat-message')
let chatForm = document.querySelector('form')
let chatDisplay = document.querySelector('.chat-display')


// emit message to the serveer
socket.on('updateMessage', data=>{

    //create p tage
    let newMessage = document.createElement('p')

    //style p tag
    if(chatUserName.value === data.username){
        newMessage.className = 'bg-white chat-text'
    }
    else{
        newMessage.className = "pink text-white chat-text"
    }

    //set inner HTML for p tag

    newMessage.innerHTML = `<strong>${data.username}</strong>: ${data.message}`

    //append to top of all messages

    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild) // append to start of all messages
})

// listen to inoming messages from the server

chatForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    //send message to server
    socket.emit('postMessage', {
        username: chatUserName.value,
        message: chatMessage.value
    })

    chatMessage.value = ''
})