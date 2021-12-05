const server = require('./server')
const express = require('express')

const port = process.env.PORT || 3000

if (process.env.NODE_ENV === 'production') {
  server.use(express.static('build'))
  server.get('*')
}

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
