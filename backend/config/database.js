const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(
      process.env.MONGO_URI
      //   {
      //   useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useFindAndModify: true,
      //   useUnifiedTopology: true,
      // }
    )
    .then((con) => {
      console.log(`Database Connected Successfully ${con.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
