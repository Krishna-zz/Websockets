import { WebSocketServer } from 'ws'


const wss = new WebSocketServer({port: 8080})


wss.on('connection' , (ws) => {

    console.log('✅ Client connected');
    
    ws.send("Hello Client! 👋")

    ws.on("message", (message) => {
        console.log("📩 Received from client:", message.toString());
        
        ws.send(`Server echo:${message}`)

    })

    ws.on("close", () => {
        console.log('❌ Client disconnected');
        
    })
})

