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

// const valuesArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]

// // console.log(valuesArr)
// let grid = []
// // let gridFunct = (...valuesArr) => {
// //   valuesArr.map().forEach(value => {
// //     console.log(value)
// //     return grid.push(`<div class="card"><span>${value}</span></div>`)
// //   })
// //   // return grid.push(`<div class="card"><span>${item}</span></div>`)
// // }

// // gridFunct(valuesArr)
// // valuesArr.foreach(gridFunct(item))
// // console.log(grid)
// // console.log(valuesArr)
// // document.querySelector("#gridContainer").innerHTML = valuesArr

// //this function shuffles the array so my cards are randomly placed
// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1))
//     var temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }
// }

// shuffleArray(valuesArr)

// //this function is where I place and define the cards onto the actual HTML
// for (let i = 0; i < valuesArr.length; i++) {
//   let value = valuesArr[i]
//   let gridFunct = (x) => {
//     // let value = valuesArr[i]
//     return grid.push(
//       `<div class="card"><span class="item hidden ${x}">${x}</span></div>`
//     )
//   }
//   gridFunct(value)
//   document.querySelector("#gridContainer").innerHTML = grid.join("")
//   // return grid.push(`<div class="card"><span>${item}</span></div>`)
// }

// let match = (e) => {
//   // console.log(e.target)
//   let el = e.target
//   let item = e.target.children[0]
//   console.log(el)
//   // console.log(item)
//   // if (item[0]) {
//   //   console.log(true)
//   // }
//   console.log(item)

//   // if (item.classList.contains("item")) {
//   //   console.log(item.classList.value)
//   // }

//   if (el) {
//     item.classList.remove("hidden")
//   }

//   // console.log(innerContent)
//   // if (el.clicked == true) {
//   //   console.log("yeeet")
//   //   // innerContent.classList.remove("hidden")
//   // }
//   // for (let i = 0; i < item.length; i++) {
//   //   console.log(item[i])
//   //   // if (item[i].classlist.contains("hidden")) {
//   //   //   // console.log("if")
//   //   // }
//   // }
// }
// let innerContent = document.querySelector(".item")
// let card = document.querySelector(".card")
// let container = document.querySelector("#gridContainer")

// container.addEventListener("click", match)

// console.log(grid)
// console.log(valuesArr[i])

//................................................................
//.......................................S........................
//.TTTTTTTTTTTTTTT.EEEEEEEEEEEEEE....SSSSSSSSS....TTTTTTTTTTTTTT..
//.TTTTTTTTTTTTTTT.EEEEEEEEEEEEEE...SSSSSSSSSSS...TTTTTTTTTTTTTT..
//.TTTTTTTTTTTTTTT.EEEEEEEEEEEEEE..SSSSSSSSSSSSS..TTTTTTTTTTTTTT..
//.TTTTTTTTTTTTTTT.EEEEEEEEEEEEEE..SSSSSSSSSSSSSS.TTTTTTTTTTTTTT..
//......TTTTT......EEEEE..........SSSSSS...SSSSSS......TTTTT......
//......TTTTT......EEEEE..........SSSSS.....SSSSS......TTTTT......
//......TTTTT......EEEEE...........SSSSSS..............TTTTT......
//......TTTTT......EEEEEEEEEEEEE...SSSSSSSSSS..........TTTTT......
//......TTTTT......EEEEEEEEEEEEE...SSSSSSSSSSSSS.......TTTTT......
//......TTTTT......EEEEEEEEEEEEE....SSSSSSSSSSSSS......TTTTT......
//......TTTTT......EEEEEEEEEEEEE......SSSSSSSSSSS......TTTTT......
//......TTTTT......EEEEE.................SSSSSSSS......TTTTT......
//......TTTTT......EEEEE..........SSSSS.....SSSSSS.....TTTTT......
//......TTTTT......EEEEE..........SSSSS......SSSSS.....TTTTT......
//......TTTTT......EEEEEEEEEEEEEE.SSSSSSS..SSSSSS......TTTTT......
//......TTTTT......EEEEEEEEEEEEEE..SSSSSSSSSSSSSS......TTTTT......
//......TTTTT......EEEEEEEEEEEEEE..SSSSSSSSSSSSS.......TTTTT......
//......TTTTT......EEEEEEEEEEEEEE...SSSSSSSSSSS........TTTTT......
//....................................SSSSSSSS....................
//................................................................

const valuesArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]

// let innerContent = document.querySelector(".item")
// let card = document.querySelectorAll(".card")
// console.log(card)
// let cards = [...card]
// let container = document.querySelector("#gridContainer")

let grid = []

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

shuffleArray(valuesArr)

for (let i = 0; i < valuesArr.length; i++) {
  let value = valuesArr[i]
  // console.log(valuesArr[i])
  let gridFunct = (x) => {
    // let value = valuesArr[i]
    return grid.push(
      `<div class="card hidden" data-value="${x}">${x}</div>`
    )
  }
  gridFunct(value)
  document.querySelector("#gridContainer").innerHTML = grid.join("")
}

let cards = document.querySelectorAll(".card")
// console.log(cards)

matchArr = []
flipped = []
// flipped2 = []

// let hasBeenFlipped = false
let firstCard = null
let secondCard = null

// add event listener inside of the match function??
// item.addEventListener('click', flip)
let match = (e) => {
  let el = e.target
  // let item = el.children[0]
  console.log(el)
    // console.log(item)
    // console.log(this)
  matchArr.push(el.dataset.value)
  console.log(matchArr)
  // let flip = () => {
  if (matchArr.length < 3 && matchArr.length > 0) {

    // firstCard = this
    // console.log(this)
    return el.classList.remove("hidden") & el.classList.add("flipped")
    // checkMatch(el)

    // matchArr.push(el.dataset.value)

    // firstCard = this
    // console.log(firstCard)
  }
  checkMatch()
}
let checkMatch = () => {
  if (matchArr.length === 2) {
    // if (!el.classList.contains("hidden")) {
    // flip() = null
    // cards.removeEventListener("click", match)
    // cards.forEach((card) => card.removeEventListener("click", match))
    // }
    if (matchArr[0] === matchArr[1]) {
      matched(el)


    } else if (matchArr[0] !== matchArr[1]) {
      unmatched(el)


      // unmatched()
    }
    // console.log("there is two")
  }
}
  // flip(el)
  let matched = (y) => {
    console.log("matched")
    
    // if (y.classList.includes("flipped")) {
    //   y.classList.add("disabled")
    //   y.classList.remove("flipped")
    //   // }
    //   // matchArr.splice(0, 2)

    //   // matched()
    //   matchArr.splice(0, 2)
    // }
    // cards.forEach((card) => card.addEventListener("click", match))
  }

  let unmatched = (x) => {
    console.log("unmatched")
  //   if (x.classList.includes("flipped")) {
  //    x.classList.add("hidden")
  //     x.classList.remove("flipped")
  //     matchArr.splice(0, 2)
  //   }
  //   // cards.forEach((card) => card.addEventListener("click", match))

  }





  // console.log(item.dataset.value)

  // matchArr.push(item.dataset.value)

  // if (item != hasBeenFlipped) {
  //   hasBeenFlipped = true
  //   firstCard = this
  // }
  // console.log(this)
  // function flip(x) {
  //     matchArr.push(x.dataset.value)
  //     console.log(matchArr[0], matchArr[1])
  //     if (matchArr.length === 2) {
  //       if (matchArr[0] === matchArr[1]) {
  //         matched()
  //       }
  //       else {
  //         unmatched()
  //       }
  //     }
  //   }
  //   console.log(x)
  // }

  // flip(item)

  // let matched = () => {
  //   console.log(matchArr[0].dataset)
  // }

  // let unmatched = () => {
  //   // matchArr[0].classList.add("this")
  //   console.log("unmatched")
  // }
  // if (item.classList.contains("flipped")) {
  //   container.removeEventListener("click", match)
  // }

  // function flipSecond(y) {
  //   y.classList.remove("hidden")
  //   if (!y.classList.contains("hidden") && !y.classList.contains("flipped1")) {
  //     y.classList.add("flipped2")
  //   }
  // }
  // flipSecond(item)
  // console.log(item)

  // matchArr.push(item.innerText)
  // console.log(item.classList)

  // if (item.classList.includes(item.innerText)) {
  //   console.log(true)
  // }

  // if (matchArr.length >= 2) {
  //   if (matchArr[0] === matchArr[1]) {
  //     item.classList.includes(matchArr)
  //     // matchArr.splice(0, 2)
  //   } else if (!matchArr[0] === matchArr[1]) {

  //     // matchArr.splice(0, 2)
  //   }
  //   matchArr.splice(0, 2)
  //   // console.log("yeeet")
  // }

  // if (el) {
  //   item.classList.remove("hidden")
  // }
// }
// for (let i = 0; i < cards.length; i++) {
//   // console.log(cards[i])
//   cards[i].addEventListener("click", match)
// }
cards.forEach((card) => card.addEventListener("click", match))

// can i pull the value? Maybe looking at the classes is unnecessary and redundant
// Because if i can i just add the sheer value of the innerContent and then push that,
//  and then i can compare value1 and value2

// if value1 = value2 then keep the values shown, and empty matchArr
// otherwise, hide both again, and empty matchArr
