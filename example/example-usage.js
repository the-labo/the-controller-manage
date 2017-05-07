'use strict'

const { TheManageCtrl } = require('the-controller-manage')
const theServer = require('the-server')

async function tryExample () {
  let server = theServer({ /* ... */ })

  server.register(
    class extends TheManageCtrl { /* ... */},
    'some'
  )

  server.listen(3000)
}

tryExample().catch((err) => console.error(err))
