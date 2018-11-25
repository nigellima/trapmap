const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Trap model
const TrapSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'users'},
    description: {type: String, required: true},
    location: {
        lat: {type: Number, required: true},
        long: {type: Number, required: true}
    },
    type: {type: String, required: true},
    date: {type: Date, default: Date.now}, 
    image: {type: String},
    comments: [{
        user: {type: Schema.Types.ObjectId, ref: 'users'},
        text: { type: String, required: true },
        date: { type: Date, default: Date.now }
    }],
});

module.exports = User = mongoose.model('traps', TrapSchema );