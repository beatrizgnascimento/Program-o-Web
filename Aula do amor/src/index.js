const express = require("express");
const router = require("./router.js");

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("App ouvindo na porta 3000");
});
