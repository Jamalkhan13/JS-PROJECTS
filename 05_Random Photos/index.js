const imageContainerElement = document.querySelector(".image-container")

const btnElement = document.querySelector('.btn')

btnElement.addEventListener('click',()=>{
  const imageNum = 10;
   addNewImages(imageNum)
})

function addNewImages (imageNum){
  // const imageNum = 20; can also initialize here directly but if we use in eventListner then it will be with argument
  for(let i = 0; i<imageNum;i++){  // if want to add one photo on every click then no need of loop 
  const newImageElement = document.createElement("img");
  newImageElement.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
  imageContainerElement.appendChild(newImageElement);
  }
}