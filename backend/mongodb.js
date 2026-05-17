const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URL);

const Schema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todomodel=mongoose.model('todos',Schema);

module.exports = {
    todos:todomodel
}