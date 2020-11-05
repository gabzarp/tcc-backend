const mongoose = require("../../database/mongodb.js");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  user_type: { type: String, required: true },
  projects: [{ type:  mongoose.Schema.Types.ObjectId, ref: "Project", autopopulate: true }],
});

UserSchema.plugin(require('mongoose-autopopulate'));

UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    try {
      const hashed = await bcrypt.hash(this.password, 10);
      this.password = hashed;
      return next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
});

UserSchema.methods.checkPassword = async function (password) {
  try {
    const auth = await bcrypt.compare(password, this.password);
    return auth;
  } catch (error) {
    throw error;
  }
};

module.exports = mongoose.model("User", UserSchema);
