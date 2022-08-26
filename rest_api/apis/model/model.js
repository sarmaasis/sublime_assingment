const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
    
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model('Customer', CustomerSchema);