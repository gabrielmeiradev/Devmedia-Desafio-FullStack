const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect('mongodb+srv://root:versashare@cluster0.tce4wd0.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas Conectado!"))
    .catch((err) => console.error(err));
};

module.exports = connectToDb;