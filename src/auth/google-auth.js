const { google } = require('googleapis')
// const secret = require('../../credentials/client_secret.json')
const { StartServer, StopServer } = require('../services/WebServer')
const OAuth = google.auth.OAuth2

async function Authenticate() {
  const { app, server } = await StartServer()
  const OAuthToken = createOAuth()
  requestUser(OAuthToken)
  const authCode = await waitGoogleResponse(app)
  await requestAccessToken(OAuthToken, authCode)
  setGlobalAuthentication(OAuthToken)
  StopServer(server)
}

function createOAuth() {
  const clientSecret = process.env.API_KEY;
  const clientId = process.env.CLIENT_ID;
  const redirectUrl = process.env.REDIRECT_URI;
  const OAuth2Client = new OAuth(clientId, clientSecret, redirectUrl);

  return OAuth2Client
}


function requestUser(OAuthToken) {
  const authUrl = OAuthToken.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/youtube']
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
}

async function requestAccessToken(OAuthToken, authCode) {
  return new Promise((resolve, reject) => {
    OAuthToken.getToken(authCode, function (err, token) {
    if (err) {
        console.log('Error while trying to retrieve access token', err);
        return reject(err);
      }
      OAuthToken.setCredentials(token);
      resolve()
    });
  })
}

function setGlobalAuthentication(OAuthToken) {
  google.options({
    auth: OAuthToken
  })
}


async function waitGoogleResponse(app) {
  return new Promise((resolve, reject) => {
    app.get('/oauth', (req, res) => {
      const authCode = req.query.code
      console.log('Token: '+authCode);
      res.send('OK')
      resolve(authCode)
    })
    
  })
}

module.exports = Authenticate