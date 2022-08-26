const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/sublime_db';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;