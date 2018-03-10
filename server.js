const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()

app.use(fileUpload())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

app.post('/upload', function(req, res) {
    if (!req.files) {
        res.send(400, 'no files uploaded')
    }
    console.log(req.files)
    res.send(200)
})

app.listen(3000)
console.log('running on 3000')