const express = require('express')
const app = express()
const port = 5000

app.get('/exampleendpoint', (req, res) => {
  // Return a json response
  res.json({exampleString: 'Hello World!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})