const containerElement = document.querySelector(".conatiner")

const careers = ["Youtuber","Web Developer","Freelancer","Instructor"]

let careerIndex = 0;
let characterIndex = 0;
function updateText (){
  characterIndex++
  containerElement.innerHTML = `<h1>i am ${careers[careerIndex].slice(0,1) === "I" ? "an" :"a"} ${careers[careerIndex].slice(0,characterIndex)} </h1>`;
  // characterIndex++
  if(characterIndex === careers[careerIndex].length){
    careerIndex++;
    characterIndex = 0
  }
  if(careerIndex === careers.length){
    careerIndex = 0
  }
  setTimeout(()=>{
    updateText()
  },400)

}
updateText()


