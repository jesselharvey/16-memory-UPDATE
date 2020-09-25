//memory game
// grid of 18 "cards" (3 x 6)

//assign each card a possible value of 1-9, can not be more than 2 of each card
// create an arr of 9 values, two of each.

// click on card, show card, then click a second card and show,
//  if card value 1 = card value 2, disable cards w the same value(keep them shown)
//  otherwise hide both cards again & lose a turn

// dataArr = []
// click event for each div,button, etc.
// add value 1 to arr => arr = [value1]
// add value 2 to arr => arr = [value1, value2]
// if value 1 = value 2 then keep the xValue
// no matter what clear the arr

const valuesArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]

// console.log(valuesArr)
let grid = []
// let gridFunct = (...valuesArr) => {
//   valuesArr.map().forEach(value => {
//     console.log(value)
//     return grid.push(`<div class="card"><span>${value}</span></div>`)
//   })
//   // return grid.push(`<div class="card"><span>${item}</span></div>`)
// }

// gridFunct(valuesArr)
// valuesArr.foreach(gridFunct(item))
// console.log(grid)
// console.log(valuesArr)
// document.querySelector("#gridContainer").innerHTML = valuesArr

//this function shuffles the array so my cards are randomly placed
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

shuffleArray(valuesArr)

//this function is where I place and define the cards onto the actual HTML
for (let i = 0; i < valuesArr.length; i++) {
  let value = valuesArr[i]
  let gridFunct = (x) => {
    // let value = valuesArr[i]
    return grid.push(
      `<div class="card"><span class="item hidden ${x}">${x}</span></div>`
    )
  }
  gridFunct(value)
  document.querySelector("#gridContainer").innerHTML = grid.join("")
  // return grid.push(`<div class="card"><span>${item}</span></div>`)
}

let match = (e) => {
  console.log(e.target)
  let item = e.target.childNodes
  for (let i = 0; i < item.length; i++) {
    console.log(item[i])

  }
}
let innerContent = document.querySelector(".item")
let card = document.querySelector(".card")
let container = document.querySelector("#gridContainer")

container.addEventListener("click", match)

// console.log(grid)
// console.log(valuesArr[i])
