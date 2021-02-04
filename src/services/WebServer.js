const express = require('express')
const app = express();
const PORT = process.env.PORT || 3333
function StartServer() {
  return new Promise((resolve, reject) => {
    const server = app.listen(PORT, () => {
      console.log('listening on port: ' + PORT);
      resolve({ server, app })
    })
  })
}

function StopServer(server) {
  server.close()
}


module.exports = { StartServer, StopServer };