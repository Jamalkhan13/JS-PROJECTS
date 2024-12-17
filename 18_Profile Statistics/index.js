const countersElement = document.querySelectorAll(".counter")

countersElement.forEach(counter=>{
  counter.innerText = "0";
  incrementCounter()
  function incrementCounter(){
    let currentNumber = +counter.innerText;
    const dataCeil = +counter.getAttribute("data-ceil")
    const increment = dataCeil / 15;

    currentNumber = Math.ceil(currentNumber + increment)
    counter.innerText = currentNumber
    if(currentNumber < dataCeil){
      counter.innerText = currentNumber;
      setTimeout(incrementCounter,50)
    }else{
      counter.innerText = dataCeil
    }
  }
})