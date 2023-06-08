const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://psong1:${process.env.DB_PW}@cluster0.gkd8vjw.mongodb.net/googlebooks?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
