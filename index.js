require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");

// Crear el servidor de express
const app = express();

// Configurar cors
app.use(cors());

//Base de Datos
dbConnection();

// rutas
app.get("/", (res, req) => {
  res.status(200).json({
    ok: true,
    message: "Hola Mundo",
  });
});

// levantar servidor
app.listen(process.env.PORT, () => {
  console.log(`Server run ` + process.env.PORT);
});
