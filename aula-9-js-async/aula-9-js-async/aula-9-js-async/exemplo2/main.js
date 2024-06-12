const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  let x;
  for(let i = 0; i < 1000000000; i++) {
    x = i*Math.random()*Math.pow(i,2); //faz nada. Só enrolação
  }

  console.log(x);

  let pElem = document.createElement('p');
  pElem.textContent = 'Agora você consegue usar o input!';
  document.body.append(pElem);
});
