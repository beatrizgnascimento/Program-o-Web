const parametros = process.argv.slice(2);

const hashOp = parametros.includes("-op");
let op;

const hasOpn = parametros.includes("-opn");
let op1, op2;

if (hashOp) {
  op = parametros[parametros.indexOf("-op") + 1];
  if (!op) {
    console.log("Operação inválida");
  } else {
    console.log("Necessário informar operação com -op");
    process.exit();
  }
}

if (hasOpn) {
  op1 = Number(parametros[parametros.indexOf("-opn") + 1]);
  op2 = Number(parametros[parametros.indexOf("-opn") + 2]);
  if (isNaN(op1) || isNaN(op2)) {
    console.log("Necessário informar dois operandos");
    process.exit()
  }
}
