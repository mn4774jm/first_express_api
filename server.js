
let express = require('express')
let routes = require('./routes/routes')

// create web app
let app = express()
// tell app to use the route creadted
app.use('/api', routes)

// have app listen to requests on a specific port
// function is used to get feedback
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})