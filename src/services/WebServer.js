const express = require('express')
const app = express();

function StartServer() {
  return new Promise((resolve, reject) => {
    const server = app.listen(3333, () => resolve({ server, app }))
  })
}

function StopServer(server) {
  server.close()
}


module.exports = { StartServer, StopServer };