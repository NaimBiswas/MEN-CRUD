const mongoose = require('mongoose');

const AliensModelSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },

   tech: {
      type: String,
      required: true,
   },
   sub: {
      type: Boolean,
      required: false,
   }

});

module.exports = mongoose.model("Alien", AliensModelSchema);
