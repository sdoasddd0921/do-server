const express = require('express')
const os = require('os')

const app = express()
const hostServer = ['nk']

const isServer = hostServer.indexOf(oa.hostname()) !== -1
const port = isServer ? 80 : 3032

app.get('/', (req, res) => {
  res.send('node server opened.')
})

app.listen(port, () => {
  console.log('servre started at port: ' + port)
})