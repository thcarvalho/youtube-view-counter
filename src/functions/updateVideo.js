const { google } = require("googleapis")

function updateVideo(video) {
  var service = google.youtube('v3')

  const currentTitle = video.snippet.title
  const updatedTitle = `ESSE VÍDEO TEM ${video.statistics.viewCount} VIEWS`

  if (currentTitle === updatedTitle) {
    console.log('Titulo não mudou');
    return
  }

  service.videos.update({
    part: 'snippet',
    requestBody: {
      id: '6eJyqDP1lZw',
      snippet: {
        title: updatedTitle,
        description: video.snippet.description,
        categoryId: '22'
      }
    }
  })
}

module.exports = updateVideo