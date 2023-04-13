require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileupload = require('express-fileupload')
const routesAd = require('./routes/routesAd')
const routesAuth = require('./routes/routesAuth')
const routesUser = require('./routes/routesUser')

try {
    mongoose.connect(
        process.env.DATABASE
    )
    console.log('conectado')
} catch (error) {
    console.log(error)
}


mongoose.Promise = global.Promise
mongoose.connection.on('error', (error)=>{
    console.log("Erro ", error.message)
})

const server = express()
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({
    extended: true
}))
server.use(fileupload())
server.use(express.static(__dirname+'/public'))

server.use('/', routesAd)
server.use('/', routesAuth)
server.use('/', routesUser)

server.listen(process.env.PORT, ()=>{
    console.log(`Rodando no endereço: ${process.env.BASE}`)
})