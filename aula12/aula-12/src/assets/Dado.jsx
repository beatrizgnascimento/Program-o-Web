export default function Dado() {
  let valorDao = Math.trunc(Math.random() * 6) + 1;
  return <p>Valor do dado jogado:</p>;
}
