const mongoose = require("mongoose");
mongoose.connect(`mongodb://Sourajit:Nt5nE3Vm6RuuDbGp@ac-xmcc4va-shard-00-00.cdy3vz9.mongodb.net:27017,ac-xmcc4va-shard-00-01.cdy3vz9.mongodb.net:27017,ac-xmcc4va-shard-00-02.cdy3vz9.mongodb.net:27017/TodoList?ssl=true&replicaSet=atlas-432qsv-shard-0&authSource=admin&appName=Cluster0`);

const Schema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todomodel=mongoose.model('todos',Schema);

module.exports = {
    todos:todomodel
}