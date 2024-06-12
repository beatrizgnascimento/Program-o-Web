const express = require("express");
const app = express();
const fs = require("fs"); //sistema de arquivo do node

app.listen(3000, () => {
  console.log("Servidor ligado");
});

app.get("/", (req, res) => {
  res.send("Você está na raiz da página");
});

app.get("/ps5", (req, res) => {
  res.send("<h1>Recurso PS5</h1>");
});

app.get("/*", (req, res) => {
  res.send("Isso é emabraçoso não?");
});

app.get("/disciplinas/:sigla", (req, res) => {
  const { sigla } = req.params;
  //const bd = fs.readFileSync("disciplinas.json", { encoding: "utf8" }); //decodificar os bytes do arquivo em utf8 deixando mais fácil a leitura
  const bd = JSON.parse(
    fs.readFileSync("disciplinas.json", { encoding: "utf8" })
  );
  for (let disciplina of disciplinas) {
    if (disciplina.sigla === sigla.toLowerCase()) {
      res.send(disciplina.ementa);
    }
  }
  res.send("Sigla inválida");
  console.log(bd);
  console.log(sigla);
  res.send(sigla);
});
