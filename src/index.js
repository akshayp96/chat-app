const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000
const directoryPath = path.join(__dirname,'../public')

app.use(express.static(directoryPath))

app.listen(port, () => {

    console.log('Server Started on port number '+port);
})