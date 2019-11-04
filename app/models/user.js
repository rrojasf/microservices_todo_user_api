const mongoose = require("mongoose")

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: "Kindly enter the name of the task"
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("User", UserSchema)
