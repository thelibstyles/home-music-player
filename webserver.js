const express = require('express')
const app = express()
const port = 4000

app.use(express.static('public'))

// server test http://localhost:4000/index.htm

app.listen(port, () => {
  console.log(`
  Home music audio player library - web server for UI started!
  [See documentation for use]
  http://localhost:${port}`)
})