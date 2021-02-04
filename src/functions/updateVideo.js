const { google } = require("googleapis")

function updateVideo(video) {
  var service = google.youtube('v3')

  const currentTitle = video.snippet.title
  const updatedTitle = `Esse vídeo tem ${video.statistics.viewCount} views`

  if (currentTitle === updatedTitle) {
    console.log('Titulo não mudou');
    return
  }

  service.videos.update({
    part: 'snippet',
    requestBody: {
      id: '0qmOPs3uUq8',
      snippet: {
        title: updatedTitle,
        categoryId: '22'
      }
    }
  })
}

module.exports = updateVideo