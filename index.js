const express = require('express');
const http = require('http');
const connectDB = require('./config/database');
const movieRoutes = require('./routes/movies'); 
const authRoutes = require('./routes/auth');    
const { Server } = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = new Server(server);

require('dotenv').config();
connectDB();

app.use(express.json());


app.use('/api/movies', movieRoutes);
app.use('/api/auth', authRoutes);

io.on('connection', (socket) => {
    console.log('New WebSocket connection');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));