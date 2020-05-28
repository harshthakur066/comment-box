const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  body: String,
  yesVotes: { type: Number, default: 0 },
  noVotes: { type: Number, default: 0 },
});

mongoose.model("posts", userSchema);
