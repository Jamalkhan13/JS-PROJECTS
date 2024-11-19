const monthNameElement = document.getElementById('month-name')

const dayNameElement = document.getElementById('day-name')

const dayNumberElement = document.getElementById('day-number')

const yearElement = document.getElementById('year')


const date = new Date()

const month = date.getMonth()
monthNameElement.innerText = date.toLocaleString("en",{
  month:"long"})  // Outputs the full name of the current month, e.g., "November"   short will be NOV and narrow will be N 

dayNameElement.innerText = date.toLocaleString("en",{
  weekday : "long"
})

dayNumberElement.innerText =date.getDate()

yearElement.innerText = date.getFullYear()
