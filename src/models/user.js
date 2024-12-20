const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userPass: { type: String, required: true },
  userEmail: { type: String, required: true, unique: true },
  userRegisterDate: { type: Date, required: true, default: new Date() },
  userRole: { type: String, required: true },
  userProfile: { type: String },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
