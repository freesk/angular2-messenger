var mongoose = require('mongoose');
// A blueprint object of the model
var Schema = mongoose.Schema;
// Initialize
var schema = new Schema({
    content: {
      // Define a vale type for mongoose validation
      type: String,
      // Must always be in there
      required: true
    },
    user: {
      // Must be a different mongoose object's ID
      type: Schema.Types.ObjectId,
      // It tells about connection to a differnt model
      ref: 'User'
    }
});
// Export the model as "Message"
module.exports = mongoose.model('Message', schema);
