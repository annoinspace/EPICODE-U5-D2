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

// Write a JavaScript functionality to change the background of the jumbotron
let changeJumbotronColor = function () {
  let jumbotron = document.querySelector(".jumbotron")
  jumbotron.style.backgroundColor = "pink"
}

// changeJumbotronColor()

//Write a JavaScript functionality to remove the “twitter” link under the “Elsewhere”
//section in the aside element. It should happen when the page loads, automatically

window.onload = function () {
  const twitterList = document.getElementsByTagName("ol")[2]
  const twitter = twitterList.getElementsByTagName("li")[1]

  twitterList.removeChild(twitter)
}

//Write a JavaScript functionality to remove the first
//50 characters in the first paragraph for every blog post
let remove50Words = function () {
  let arrayOfParagraphs = document.querySelectorAll(
    "div.blog-post > p:nth-child(3)"
  )

  for (let i = 0; i < arrayOfParagraphs.length; i++) {
    let string = arrayOfParagraphs[i].innerText
    let newString = string.slice(50)
    arrayOfParagraphs[i].innerText = newString
  }
}

remove50Words()
