const mongoose = require("mongoose");

const contactMessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("ContactMessage", contactMessageSchema);
