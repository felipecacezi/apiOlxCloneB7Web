const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const modelSchema = new mongoose.Schema({
    name: String
})

const modelName = 'states'

const teste = mongoose.model('states', modelSchema)

const teste2 = async ()=>await teste.find({});

console.log(teste2)
return

if (mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName]
} else {
    module.exports = mongoose.model(modelName, modelSchema)
}