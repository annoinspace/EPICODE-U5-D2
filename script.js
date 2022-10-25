// Write a JavaScript functionality to add a new link into the navbar
let addLinkToNavbar = function () {
  let navbar = document.querySelector(".nav")
  let newLink = document.createElement("span")
  newLink.innerText = "New Link"
  navbar.appendChild(newLink)
}

addLinkToNavbar()
