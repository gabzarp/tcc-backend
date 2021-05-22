
const mongoose = require("mongoose");
mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.j90rd.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
module.exports = mongoose;
