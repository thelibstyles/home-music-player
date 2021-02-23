const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('Hello World!')
  // json response
  res.json(
    [ 
    {
      Song: 'song name here',
      songLocation: 'song location in server here',
      songLength: 'song lengh in m:ss',
      songCoverArt: 'song cover art image file here' 
    },
    ]
    
    )
  res.send()
})

app.listen(port, () => {
  console.log(`
  Home music audio player library - music files API started!
  [See documentation for use]
  http://localhost:${port}`)
})