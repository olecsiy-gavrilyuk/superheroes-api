const mongoose = require('mongoose');

const { autoIncrement } = require("mongoose-plugin-autoinc");

const schema = new mongoose.Schema({
    id: {type: Number, unique: true},
    path: {type: String, required: true},
});

schema.plugin(autoIncrement,{model:"mediaFiles",field:"id",startAt:0});

module.exports = mongoose.model('mediaFiles', schema);