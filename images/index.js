const navToggle = document.getElementById("nav-toggle")
const lineOne = document.getElementById("nav-line-1")
const lineTwo = document.getElementById("nav-line-2")
const lineThree = document.getElementById("nav-line-3")
const darken = document.querySelector(".darken")
const aside = document.querySelector("aside")

hasClickedToggle = false

navToggle.addEventListener("click", function() {
  if (hasClickedToggle === false) {
  lineOne.style.transform = "rotate(135deg)"
  lineOne.style.inset = "50% auto auto auto"
  lineTwo.style.opacity = "0"
  lineThree.style.inset = "50% auto auto auto"
  lineThree.style.transform = "rotate(-135deg)"
  aside.style.transform = "scaleX(100%) translateX(50%)"
  darken.style.zIndex = "0"
  darken.style.opacity = "0.8"
  darken.style.backgroundColor = "transparent"
  darken.style.backgroundImage = "linear-gradient(to bottom, var(--black) 0, transparent 20%, transparent)"
  hasClickedToggle = true
} else {
  lineOne.style.transform = "rotate(0deg) translateY(-50%)"
  lineOne.style.inset = "0 auto auto auto"
  lineTwo.style.opacity = "1"
  lineThree.style.inset = "auto auto 0 auto"
  lineThree.style.transform = "rotate(0deg) translateY(50%)"
  aside.style.transform = "scaleX(0) translateX(50%)"
  darken.style.zIndex = "-1"
  darken.style.opacity = "0"
  darken.style.backgroundColor = "var(--black)"
  darken.style.backgroundImage = "none"
  hasClickedToggle = false
}
})

const inputs = document.querySelectorAll("input[type='radio']")
const inputElements = Array.from(inputs)
const footer = document.querySelectorAll(".pledge-footer")

function undo() {
  inputElements.map((item, index) => {
    item.parentElement.parentElement.style.border = "none"
    item.parentElement.parentElement.style.boxShadow = "0 0 5px hsl(0, 0%, 80%)"
    if (index < 3 && index > 0) {
      footer[index - 1].style.display = "none"
    }
  })
}

inputElements.map((item, index) => {
  item.addEventListener("change", (e)=> {
    undo()
    e.target.parentElement.parentElement.style.border = "2px solid var(--moderate-cyan)"
    e.target.parentElement.parentElement.style.boxShadow = "none"
    if (index < 3 && index > 0) {
      footer[index - 1].style.display = "flex"
      footer[index - 1].scrollIntoView()
    }  
  })
})

const projectBtn = document.querySelector(".back-project-btn")
const modalCloseBtn = document.querySelector("#modal-close-btn")
const modal = document.querySelector(".modal")
const seventy = document.querySelector("#seventy")
const twenty = document.querySelector("#twenty")
const completedModal = document.querySelector(".completed")
const complete = document.querySelector(".got-it")
const bookmarkBtn = document.querySelector(".bookmark-btn")
const bookmarkCircle = document.querySelector(".bookmark-btn circle")
const bookmarkPath = document.querySelector(".bookmark-btn path")
const bookmarkText = document.querySelector(".bookmark-text")

projectBtn.addEventListener("click", function() {
  modal.style.zIndex = "3"
  modal.style.opacity = "1"
  darken.style.zIndex = "0"
  darken.style.opacity = "0.8"
})
modalCloseBtn.addEventListener("click", function() {
  modal.style.zIndex = "-2"
  modal.style.opacity = "0"
  darken.style.zIndex = "-2"
  darken.style.opacity = "0"
})

seventy.addEventListener("click", function() {
  if (Number(seventy.previousElementSibling.value) < 75) {
    seventy.previousElementSibling.placeholder = "Please fill"
  } else {
    modal.style.zIndex = "-2"
    modal.style.opacity = "0"
    completedModal.style.transform = "scale(100%, 100%) translateX(50%)"
    completedModal.scrollIntoView()
  }
})

twenty.addEventListener("click", function() {
  if (Number(twenty.previousElementSibling.value) < 25) {
    twenty.previousElementSibling.placeholder = "Please fill"
  } else {
    modal.style.zIndex = "-2"
    modal.style.opacity = "0"
    completedModal.style.transform = "scale(100%, 100%) translateX(50%)"
    completedModal.scrollIntoView()
  }
})

complete.addEventListener("click", function() {
  completedModal.style.transform = "scale(0, 0) translateX(50%)"
  darken.style.zIndex = "-2"
  darken.style.opacity = "0"
})

let bookmarked = false
bookmarkBtn.addEventListener("click", function() {
  if (bookmarked === false) {
    bookmarkCircle.style.fill = "var(--dark-cyan)"
    bookmarkText.style.color = "var(--dark-cyan)"
    bookmarkPath.style.fill = "var(--white)"
    bookmarked = true
  } else {
    bookmarkCircle.style.fill = "#2F2F2F"
    bookmarkText.style.color = "var(--dark-gray)"
    bookmarkPath.style.fill = "#B1B1B1"
    bookmarked = false
  }
})

let listItems = document.querySelectorAll(".nav-list li")
let section3 = document.querySelector(".section_3")
let subSection = document.querySelectorAll(".sub-section-3")

listItems[0].addEventListener("click", function() {
  section3.scrollIntoView()
})
listItems[1].addEventListener("click", function() {
  subSection[0].scrollIntoView()
})
listItems[2].addEventListener("click", function() {
  projectBtn.scrollIntoView()
})
