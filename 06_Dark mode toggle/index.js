const inputElement = document.querySelector('.input')
const bodyElement = document.querySelector('body')
console.log(inputElement);

inputElement.checked = JSON.parse(localStorage.getItem("mode"))

function updateBody(){
  if(inputElement.checked){
    bodyElement.style.backgroundColor = "black"
  }else{
    bodyElement.style.backgroundColor = "white"
  }
}

updateBody()

inputElement.addEventListener('input',function(){
  updateBody()
  updateLocalStorage()
})


function updateLocalStorage (){
  localStorage.setItem("mode",JSON.stringify(inputElement.checked))
}