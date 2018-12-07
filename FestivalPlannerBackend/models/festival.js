const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FestivalSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    date: {
        type: Date
    },
    price: {
        type: Number
    },
    location: {
        type: String
    }
});

const festival = mongoose.model('festival', FestivalSchema);

module.exports = festival;