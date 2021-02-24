require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT;
const cors = require('cors');
const mongoose = require('mongoose');

//importing routes
const chatRouter = require('./controllers/chat');
const userRouter = require('./controllers/user');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.set('views', './views');
// app.set('view engine', 'pug');

mongoose.connect(process.env.DB, {
  useUnifiedTopology:true,
  useNewUrlParser: true,
  useCreateIndex: true,
  // useMongoClient:true
})

mongoose.connection.on('connected', () => {
console.log(`Mongo has connected succesfully at ${process.env.DB}`)
})

// app.get('/', (req, res) => {
//   res.render('index')
// })

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

app.use('/chat', chatRouter);
app.use('/user', userRouter);

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
