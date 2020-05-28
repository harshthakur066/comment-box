const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  body: String,
  upVotes: { type: Number, default: 0, min: 0 },
  downVotes: { type: Number, default: 0, min: 0 },
});

mongoose.model("posts", userSchema);
