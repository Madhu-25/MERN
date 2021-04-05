const mongoose = require("mongoose");
//model - schema 
const snippetSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    code: {type: String}
}, {
    timestamps : true
});

const Snippet = mongoose.model("snippet", snippetSchema);

module.exports = Snippet;