import express from 'express';

const app = express()
const port = 5000

// Example endpoint
app.get('/exampleendpoint', (req, res) => {
  // How to read query param
  console.log(req.query.paramname)
  // Return a json response
  res.json({exampleString: 'Hello World!'})
})

// UPDATE THIS ENDPOINT ONLY
app.get('/endpoint', (req, res) => {
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})