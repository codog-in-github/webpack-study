const createWebSocketClient = url => {
    const ws = new WebSocket(url)
    ws.onmessage = message => {
        window.history.go(0)
    }
}

const wsClient = createWebSocketClient('ws://127.0.0.1:1234/')