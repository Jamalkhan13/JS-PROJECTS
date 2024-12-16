const daysElement = document.getElementById("days");
const housrElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

function updateCountdown (){
  const now = new Date().getTime();
  const gap = newYearTime - now
  
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const d = Math.floor((gap/days))
  const h = Math.floor((gap % days)/hours)
  const m = Math.floor((gap % hours)/minutes)
  const s = Math.floor((gap % minutes)/seconds)
  
  daysElement.innerText = d;
  housrElement.innerText = h;
  minutesElement.innerText = m;
  secondsElement.innerText = s;
  setTimeout(updateCountdown,1000)
  
  
  
  
  
  
}
updateCountdown()