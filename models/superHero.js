const mongoose = require('mongoose');

const { autoIncrement } = require("mongoose-plugin-autoinc");

const superHeroSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    nickname: {type: String, required: true},
    real_name: {type: String, required: true},
    origin_description: {type: String, required: true},
    superpowers: {type: [String], required: true},
    catch_phrase: {type: String, required: true},
    images: [Number],
});

superHeroSchema.plugin(autoIncrement,{model:"Superhero",field:"id",startAt:0});

module.exports = mongoose.model('Superhero', superHeroSchema);