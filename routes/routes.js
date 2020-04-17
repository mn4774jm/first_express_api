// similar to a python import
let express = require('express')
let router = express.Router()

// configures a root that is a get request, path is '/'
// function runs to provide a response, req is the request the client makes, res is the response to that request
router.get('/', function(req, res, next){
    res.json({'message':'Hello World! Yay for nodemon!'})
})

// another file will be able to include this file.
module.exports = router