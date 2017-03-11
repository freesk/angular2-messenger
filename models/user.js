var mongoose = require('mongoose');
// A blueprint object of the model
var Schema = mongoose.Schema;
// Importing unique validator
var mongooseUniqueValidator = require('mongoose-unique-validator');
// Initialize
var schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true,
    // It gets validated with a mongoose plugin "mongoose-unique-validator"
    unique: true
  },
  // Define as an array of objects
  messages: [
    {
      type: Schema.Types.ObjectId,
      // It tells about connection to a differnt model
      ref: 'Message'
    }
  ]
});
// Add a plugin
schema.plugin(mongooseUniqueValidator);
// Export the model as "User"
module.exports = mongoose.model('User', schema);
