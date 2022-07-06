const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.CDC, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la BDD, ver logs");
  }
};

module.exports = {
  dbConnection,
};
