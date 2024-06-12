const rgbA = document.querySelector("#rgbA");
const rgbB = document.querySelector("#rgbB");
const rgbC = document.querySelector("#rgbC");
const btn = document.querySelector("#button");
const main = document.querySelector("main");

btn.addEventListener("click", () => {
  rgbANew = Math.floor(Math.random() * 255);
  console.log(rgbANew);
  rgbA.innerText = rgbANew;
  console.log(rgbA);
  rgbBNew = Math.floor(Math.random() * 255);
  rgbB.innerText = rgbBNew;
  rgbCNew = Math.floor(Math.random() * 255);
  rgbC.innerText = rgbCNew;
  main.style.backgroundColor = `rgb(${rgbANew}, ${rgbBNew}, ${rgbCNew})`;
});
