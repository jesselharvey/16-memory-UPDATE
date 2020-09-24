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

for (let i = 0; i < valuesArr.length; i++) {
  let value = valuesArr[i]
  let gridFunct = (x) => {
    // let value = valuesArr[i]
    return grid.push(`<div class="card"><span>${x}</span></div>`)
  }
  gridFunct(value)
  document.querySelector("#gridContainer").innerHTML = grid.join("")
  // return grid.push(`<div class="card"><span>${item}</span></div>`)
}

// console.log(grid)
// console.log(valuesArr[i])
