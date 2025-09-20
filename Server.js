import {WebSocketServer} from 'ws'


const wss = new WebSocketServer({port:8080})

console.log('✅ WebSocket server running on ws://localhost:8080');

//When connected to the Client
wss.on('connection', (ws) => {

    console.log('🔗 Client Connected!');  //Confirmation message
    
    ws.send('Hello from Server!')  //Send message to the client

    ws.on('message', (message) => {
        console.log('Received from client:', message.toString());  // handle the message from client 
        
        ws.send(`Server received: ${message}`)    //echo the message back to the client 
    })

    ws.on('close', () => {
        console.log('❌ Client disconnected');   // Close the connection
        
    })  

})






