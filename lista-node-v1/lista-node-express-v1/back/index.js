// João Henrique Flauzino - 2023001577
// Beatriz Nascimento - 2023007113

const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const path = require("path");

//Necessário para extrair os dados de Forms vindos de uma requisição POST
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Servidor na porta 3000");
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //const bd = fs.readFileSync("disciplinas.json", { encoding: "utf8" }); //decodificar os bytes do arquivo em utf8 deixando mais fácil a leitura
  const bd = JSON.parse(
    fs.readFileSync("db/banco-dados-usuario.json", { encoding: "utf8" })
  );
  for (let usuario of bd) {
    if (usuario.email === email && usuario.password === password) {
      res.send("Autenticado com sucesso");
      console.log("Ok");
    }
    if (
      (usuario.email === email && usuario.password != password) ||
      (usuario.email != email && usuario.password === password)
    ) {
      res.status(404).send("Usuario ou senha incorretos");
    }
  }
  res
    .status(404)
    .send(`Usuário com o email ${email} não existe. Considere criar uma conta`);
});

app.post("/create", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const bd = JSON.parse(
    fs.readFileSync("db/banco-dados-usuario.json", { encoding: "utf8" })
  );
  let maxid = 0;
  for (let usuario of bd) {
    maxid = Math.max(maxid, usuario.id);
    if (usuario.email === email) {
      res.status(402).send(`Usuário com o email ${email} já existe`);
    }
  }
  bd.push({
    id: maxid + 1,
    username: username,
    email: email,
    password: password,
  });
  fs.writeFileSync("db/banco-dados-usuario.json", JSON.stringify(bd), {
    encoding: "utf8",
  });
  res.send("Tudo certo. Usuário cadastrado com sucesso");
});

app.get("/disciplinas", (req, res) => {
  const bd = JSON.parse(
    fs.readFileSync("db/disciplinas.json", { encoding: "utf8" })
  );

  return res.json(bd);
});

app.get("/disciplinas/:sigla", (req, res) => {
  const { sigla } = req.params;
  const bd = JSON.parse(
    fs.readFileSync("db/disciplinas.json", { encoding: "utf8" })
  );
  for (let disciplina of bd) {
    if (disciplina.sigla === sigla) {
      return res.json(disciplina);
    }
  }
  res.status(403).send("Sigla não encontrada");
});
