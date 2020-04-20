
let express = require('express')
let routes = require('./routes/routes')
// require path library
let path = require('path')

// create web app
let app = express()

// telling server to use the dist directory in the hello-vue directory
// static keeps the code the same
app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')))
// tell app to use the route created
app.use('/api', routes)

// have app listen to requests on a specific port
// function is used to get feedback
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})