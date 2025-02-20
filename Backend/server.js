require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", require("./routes"));

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🟢 Conectado a MongoDB"))
  .catch((err) => console.error("🔴 Error conectando a MongoDB:", err));

// Primer End Point
app.get("/", (req, res) => {
  res.send("¡Hola, mundo desde Node.js!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
