const text = document.getElementById("text");
const textArray = text.innerText.split("");
const newElement = document.createElement("h2");
const lineBlock = document.getElementById("line-position");

newElement.innerHTML = `
  ${textArray
    .map((letter) => `<span style="${randomVisibility()}">${letter}</span>`)
    .join("")}
`;

console.log(lineBlock.innerHTML);

newElement.classList.add("overlay");

lineBlock.appendChild(newElement);

function randomVisibility() {
  return Math.random() < 0.3 ? "visibility: hidden" : "visibility: visible";
}
