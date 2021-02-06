const { google } = require("googleapis")

async function getVideo() {
  var service = google.youtube('v3');

  return new Promise((resolve, reject) => {
    service.videos.list({
      part: 'snippet,statistics',
      id: process.env.VIDEO_ID
    }, (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }

      var videos = response.data.items

      if (videos.length == 0) {
        console.log('No channel found.')
        reject()
      } else {
        console.log(videos[0].snippet.title)
        resolve(videos[0])
      }
    })
  })
}

module.exports = getVideo