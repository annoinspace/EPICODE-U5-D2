// Write a JavaScript functionality to add a new link into the navbar
let addLinkToNavbar = function () {
  let navbar = document.querySelector(".nav")
  let newLink = document.createElement("span")
  newLink.innerText = "New Link"
  navbar.appendChild(newLink)
}

// addLinkToNavbar()

// Write a JavaScript functionality to change the color of the main heading title

let changeMainHeadingColor = function () {
  let mainHeading = document.querySelector("h1")
  mainHeading.style.color = "lightseagreen"
}

// changeMainHeadingColor()
