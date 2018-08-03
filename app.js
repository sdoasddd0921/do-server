const express = require('express')
const cors = require('cors')
const os = require('os')
const { findall } = require('./db')
const log = console.log

const hostServer = ['am']
const app = express()

app.use(cors())

const isServer = hostServer.indexOf(os.hostname()) !== -1
const port = isServer ? 80 : 3032

app.get('/', async (req, res) => {
  log('some one has connected.')
  const result = await findall()
  res.send(result)
})

app.listen(port, () => {
  console.log('servre started at port: ' + port)
})