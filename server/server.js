const io = require('socket.io')(4000, {
    cors : {
        origin : "http://localhost:3000",
        method: ["GET", "POST"]
    }
})

io.on("connection", socket => {
    socket.on('send-change', delta => {
        socket.broadcast.emit("receive-changes", delta)
    })
})