const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
  console.log("Server rodando em: http://localhost:3000");
});
