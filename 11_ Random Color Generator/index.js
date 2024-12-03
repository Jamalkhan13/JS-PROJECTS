const containerElement = document.querySelector(".container")

for(let index = 0; index<50; index++){
  const divElement = document.createElement("div")
  divElement.classList.add("color-container")
  containerElement.appendChild(divElement)
}

const divElementColors = document.querySelectorAll(".color-container")

function generateColors (){
  divElementColors.forEach((divElementColors)=>{
    const newColor = randomColor();
    divElementColors.style.backgroundColor = "#" + newColor;  // here divElementColors is from parameter
    divElementColors.innerText = "#" + newColor
  })
}

generateColors()

function randomColor(){
  const chars = "0123456789abcdef"
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
     const randomNumber = Math.floor(Math.random()* chars.length);
     colorCode += chars.substring(randomNumber, randomNumber+1)
    
  }
  return colorCode;
}

randomColor()

