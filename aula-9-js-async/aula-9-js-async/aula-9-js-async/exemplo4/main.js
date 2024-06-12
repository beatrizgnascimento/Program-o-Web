const btn = document.querySelector('button');
const p = document.querySelector('p');

btn.addEventListener('click', () => {
  setInterval(mostraRelogio,1000);
});

function mostraRelogio(){
  let data = new Date();
  let tempo = data.toLocaleTimeString();
  p.innerText = tempo;
}