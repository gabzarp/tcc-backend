const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://admin:admin123@cluster0.j90rd.gcp.mongodb.net/cooperative?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
module.exports = mongoose;
