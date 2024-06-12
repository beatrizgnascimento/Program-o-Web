const express = require("express");

const router = express.Router();

router.get("/ping", (req, res) => {
  res.send("pong");
});

const products = [
  { id: 1, name: "Aliança", price: 100.0 },
  { id: 2, name: "Vestido", price: 6000.0 },
  { id: 3, name: "Buffet", price: 10000.0 },
];

router.get("/product/:id", (req, res) => {
  const { id } = req.params;

  res.json(
    products.filter((p) => {
      return p.id === +id;
    })
  );
});

router.get("/products", (req, res) => {
  res.json(products);
});

router.post("/products", (req, res) => {
  if (req.body.length > 1) {
    req.body.forEach((i) => products.push(i));
  } else {
    products.push(req.body);
  }

  res.status(201).json({
    message: "Produtos adicionados!",
    detail: req.body,
  });
});

module.exports = router;
