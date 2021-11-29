const WebSocket = require('ws')

class MessageQueue {
    constructor(){
        this.port = 1234
        this.sockets = []
        this.webSocketServer = this.createWebSocketServer()
            
    }

    createWebSocketServer(){
        const server = new WebSocket.Server({
            port:this.port
        })

        server.on('connection', socket =>{
            this.sockets.push(socket)
        })

        server.on('close',socket => {
            this.sockets.splice(
                this.sockets.indexOf(socket),
                1
            )
        })

        return server
    }


    send(message){
        this.sockets.forEach(socket => {
            socket.send('refresh! ')
        })
    }
}
module.exports = MessageQueue