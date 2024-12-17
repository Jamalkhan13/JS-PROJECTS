const countersElement = document.querySelectorAll(".counter")

countersElement.forEach(counterElement=>{
  counterElement.innerText = "0";

  function incrementCounter(counterElement){
    let currentNumber = +counterElement.innerText;
    const dataCeil = countersElement.getAtribute("data-Ceil")
    console.log(dataCeil);
    
  }
})