const searchBarContainer = document.querySelector(".search-bar-container")
const magnifierElement = document.querySelector(".magnifier")


magnifierElement.addEventListener("click",()=>{
  searchBarContainer.classList.toggle("active")
})


