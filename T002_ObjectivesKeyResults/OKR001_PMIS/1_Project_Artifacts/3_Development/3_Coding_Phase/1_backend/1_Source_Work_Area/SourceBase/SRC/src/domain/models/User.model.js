const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
      },
});

module.exports = mongoose.model("User", userSchema);
