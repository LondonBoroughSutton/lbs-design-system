// const path = require('path')
// const serveStatic = require('serve-static')
//
//
//
//
// const metalsmith = require('metalsmith') // configured static site generator
// const serve = require('metalsmith-serve')

const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')
const paths = require('../lib/paths.js') // specify paths to main working directories

console.log('Hit')


// Serve up public/ftp folder
const serve = serveStatic(paths.public, { index: ['index.html', 'index.htm'] })

// Create server
const server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(8080)

// setup synchronised browser testing
// metalsmith('./').use(serve())
//   .build(function (err) {
//     if (err) { throw err }
//   })

console.log(123)

// // build to destination directory
// metalsmith.build(function (err, files) {
//   if (err) { throw err }
// })
