const testimonials =  [
  {
    name: "Emily Johnson",
    photoUrl: "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I am extremely impressed with jamitech's developer product. Their innovative approach and top-notch skills have helped my business reach new heights. I highly recommend their services to anyone looking for cutting-edge solutions."
  },

  {
    name: "Sophie Anderson",
    photoUrl: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I am thrilled with the exceptional service provided by jamitech. Their developers are truly top-notch, delivering outstanding results every time. I highly recommend jamitech for anyone seeking expert solutions in the tech industry."
  },

  {
    name: "Emily Johnson",
    photoUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I am beyond impressed with jamitech's developer services. Their team is highly skilled and efficient, delivering top-notch results every time. I highly recommend them for all your development needs."
  },
];

const imageElement = document.querySelector("img")
const textElement = document.querySelector(".text")
const usernameElement = document.querySelector(".username")

let idx = 0;
function updateTestimonial(){
  const {name,photoUrl,text} = testimonials[idx]
  imageElement.src = photoUrl;
  textElement.innerText = text;
  usernameElement.innerText = name
  idx++
  if(idx === testimonials.length){
    idx = 0;
  }
  setTimeout(()=>{
    updateTestimonial()
  },10000)
}
updateTestimonial()

