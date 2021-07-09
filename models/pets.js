const mongoose = require('mongoose');

const petsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }, 
    specie: {
        type: String,
        require: true
    }, 
    sex: {
        type: String,
        enum: ['boy', 'girl'],
        require: true
    }, 
    age:{
        type: Number,
        require: true
    }, 
    owner:{
        type: String,
        require: true
    }, 
    date:{
        type: Date, 
        default: Date.now
    },
    active:{
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Pets', petsSchema);