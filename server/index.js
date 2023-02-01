import { LookerNodeSDK } from '@looker/sdk-node'
import express from 'express';

const sdk = LookerNodeSDK.init40()

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
app.get('/auth', (req, res) => {
  sdk.ok(sdk.create_sso_embed_url({
    target_url: "https://hack.looker.com" + req.query.src,
    external_user_id: req.query.googleuserid,
    models: ['bitly'],
    permissions: ['access_data', 'see_user_dashboards', 'see_lookml_dashboards']
  })).then(({ url }) => res.json({ url }))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})