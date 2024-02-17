const express = require('express')
const app = express()
const SERVER_PORT = process.env.PORT || 3000;
app.use(express.static("./views"));

// http://localhost:3000/
app.get('/C0867400', function (req, res) {
  res.send('<h1>Hello - C0866923 - Tejvir Kalsi</h1> ')
})

// http://localhost:3000/hello
app.get('/hello', function (req, res) {
    res.send('<h1>Hello Login</h1>')
  })

