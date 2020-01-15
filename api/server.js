const express = require('express')
const server = express()
const middleware = require('./middleware')
const routes = require('./routes')

server.use(express.json())
middleware(server)
routes(server)

server.get("/", (req, res, next) => {
  server.send("<h2>Hello, human. I am your server.</h2>")
})

server.use((req, res, next) => {
  res.status(404).json({ message: "You have chosen a wrong path. please try again."})
})

server.use((err, req, res, next) => {
  res.status(500).json({ message: "The server has failed you in this instance. Please forgive and try again!"})
})

module.exports = server;