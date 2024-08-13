const button1 = window.document.querySelector("#btn-cta")
const button2 = window.document.querySelector("#btn-contact")

initialTransition = "transition: transform .5s ease; transform: scale(1.1)"
finalTransition = "scale(1)"


button1.addEventListener("mouseover", () => {
  button1.style = initialTransition
})
button2.addEventListener("mouseover", () => {
  button2.style = initialTransition
})

button1.addEventListener("mouseout", () => {
  button1.style.transform = finalTransition
})

button2.addEventListener("mouseout", () => {
  button2.style.transform = finalTransition
})