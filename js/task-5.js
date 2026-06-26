const changeColorBtn = document.querySelector(".change-color");
const colorDisplay = document.querySelector(".color");

changeColorBtn.addEventListener("click", handleColorChange);

function handleColorChange() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorDisplay.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}