// server.js


const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors=require("cors")
const {Server} = require('socket.io');

app.use(cors())
const io =new Server(http,{
  cors: {
    origin:"http://localhost:3000",
    methods: ["GET",'POST']
  }
})

app.get('/', (req, res) => {
  res.send('Server is running');
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (data) => {
    console.log('Received message:', data);
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const port = 4000;
http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



/*
// app.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Define the proxy middleware
const proxyOptions = {
  target: 'https://back-l9k2.onrender.com', // Replace with your target server URL
  changeOrigin: true,
  secure: false, // Set to true if your target server uses HTTPS
};

// Create the proxy middleware
const proxy = createProxyMiddleware('/', proxyOptions);

// Use the proxy middleware
app.use(proxy);
// Store connected users
const users = {};

// Socket.IO event handlers
io.on('connection', (socket) => {
  console.log('New socket connection:', socket.id);

  // Handle new user joining the chat
  socket.on('join', (username) => {
    users[socket.id] = username;
    io.emit('userJoined', username);
  });

  // Handle incoming messages
  socket.on('message', (message) => {
    io.emit('message', { username: users[socket.id], message });
  });

  // Handle user leaving the chat
  socket.on('disconnect', () => {
    const username = users[socket.id];
    delete users[socket.id];
    io.emit('userLeft', username);
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server started on port 3000');
});
*/


/*const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('Server is running');
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (data) => {
    console.log('Received message:', data);
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const port = 3000;
http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/


/*const express= require('express')
const socket= require('socket.io')

const app= express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const blogRoutes=require('./routes/blogRoute.js')


app.use('/',blogRoutes)
const server=app.listen(3000,()=>console.log("connecting is done"))

var sio=socket(server)
sio.on('connection',function (visitor) {
    console.log("vistor as",visitor.id)

    visitor.on("message",function (data) {
        sio.sockets.emit("new_msg",data)
    })
    
})*/















