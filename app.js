const express = require('express')
const cors = require('cors')
const os = require('os')

const hostServer = ['am']
const app = express()

app.use(cors())

const isServer = hostServer.indexOf(os.hostname()) !== -1
const port = isServer ? 80 : 3032

app.get('/', (req, res) => {
  res.send('node server opened.')
})

app.listen(port, () => {
  console.log('servre started at port: ' + port)
})