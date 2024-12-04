const imageContainerElement = document.querySelector(".image-container");
const prevElement = document.getElementById("prev")
const nextElement = document.getElementById("next")

let x = 0;
let timer;
prevElement.addEventListener("click",()=>{
  x = x + 45;
  clearTimeout(timer)
  updatedGallery()
})
nextElement.addEventListener("click",()=>{
  x = x - 45;
  clearTimeout(timer)
  updatedGallery()
})



 function updatedGallery(){
  imageContainerElement.style.transform = `perspective(1000px) rotateY(${x}deg)`
  timer = setTimeout(()=>{
    x = x - 45;
    updatedGallery();
  },3000)
}

updatedGallery()

