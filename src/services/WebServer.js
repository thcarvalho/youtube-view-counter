const express = require('express')
const app = express();
const PORT = 3333 || process.env.PORT
function StartServer() {
  return new Promise((resolve, reject) => {
    const server = app.listen(PORT, () => resolve({ server, app }))
  })
}

function StopServer(server) {
  server.close()
}


module.exports = { StartServer, StopServer };