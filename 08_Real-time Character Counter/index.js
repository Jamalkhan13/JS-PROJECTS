 const textareaElement = document.getElementById("textarea")
 const totalCounterElement = document.getElementById("total-Counter")
 const remainingCounterElement = document.getElementById("remaining-Counter")

 textarea.addEventListener("keyup",()=>{
  updateCounter()
  
 })

updateCounter();


 function updateCounter(){
    totalCounterElement.innerHTML = textareaElement.value.length;
    

    // get the maxlength from html
    remainingCounterElement.innerText = textareaElement.getAttribute("maxlength") - textareaElement.value.length


    // second method : set the attribute of maxlength in JS and then get that to display

    // remainingCounterElement.innerText = textareaElement.setAttribute("maxlength","200")
    // remainingCounterElement.innerText = textareaElement.getAttribute("maxlength") - textareaElement.value.length
    
    // Third method  
    // initalize the max length  

    // textareaElement.maxlength=300
    // remainingCounterElement.innerText = textareaElement.maxlength - textareaElement.value.length

 }