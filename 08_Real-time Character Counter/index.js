 const textareaElement = document.getElementById("textarea")
 const totalCounterElement = document.getElementById("total-Counter")
 const remainingCounterElement = document.getElementById("remaining-Counter")

 textarea.addEventListener("keyup",()=>{
  updateCounter()
  
 })

updateCounter();


 function updateCounter(){
    totalCounterElement.innerHTML = textareaElement.value.length;

    remainingCounterElement.innerText = textareaElement.getAttribute("maxlength") - textareaElement.value.length
 }