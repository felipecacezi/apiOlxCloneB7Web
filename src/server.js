require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileupload = require('express-fileupload')
const router = require('./routes/routes')


mongoose.connect(process.env.DATABASE)

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
server.use('/', router)

server.listen(process.env.PORT, ()=>{
    console.log(`Rodando no endereço: ${process.env.BASE}`)
})