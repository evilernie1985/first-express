const express = require('express')
const app = express()
// listening for request

app.use(express.static('public'))
// ^^ all request will have to know that the public folder is where we put our static files

app.use(function (req, res, next) {
  console.log('first middleware')
  next()
  // ^^ next() tells app.use () to look for the next function;
  // also remember to include 'next' in app.use(function(parameters))
})
// ^^ app.use() creates 'middleware';
// all request will have to go through this middleware
app.get('/', function(req, res) {
  res.sendFile('/users/ernesttan/code/first-express/public/js/index.html')
})

app.get('/', function (req, res) {
  res.send('my first response')
})

app.get('/about/:name/:id', function (req, res) {
  res.send(req.params)
})
// ^^ wth does req.params do?

app.get('/faq', function (req, res) {
  res.send('faq page')
})

app.post('/')

app.listen(3000, function () {
  console.log('express is running on port 3000')
})

// run "yarn add nodemon" in terminal to install nodemon; nodemon will listen
// for any changes to code and restart the server automatically
// check package.json to check if nodemon installed successfully
