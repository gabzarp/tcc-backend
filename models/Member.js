const mongoose = require("../database/mongodb.js");
const bcrypt = require("bcrypt");

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

MemberSchema.pre("save", async function (next) {
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

MemberSchema.methods.checkPassword = async function (password) {
  try {
    const auth = await bcrypt.compare(password, this.password);
    return auth;
  } catch (error) {
    throw error;
  }
};

module.exports = mongoose.model("Member", MemberSchema);
