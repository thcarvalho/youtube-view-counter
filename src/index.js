const { google } = require('googleapis');
const ms = require('ms');
const Authenticate = require('./auth/google-auth');
const getVideo = require('./functions/getVideo');
const updateVideo = require('./functions/updateVideo');
require('dotenv').config()

Authenticate().then(() => {
  setInterval(() => {
    getVideo().then(video => updateVideo(video))
  }, ms('10m'))
})
