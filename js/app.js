/* --------------------------------- Constants --------------------------------- */
import {storyObjs} from '../data/story.js'

/* --------------------------------- Variables (state) --------------------------------- */
let promptIdx
let winningIdxVals = [7, 8] /* TEMP VALS UNTIL STORY IS COMPLETE */
let losingIdxVals = [9] /* TEMP VALS UNTIL STORY IS COMPLETE */

/* --------------------------------- Cached Element References --------------------------------- */

const imgElement = document.getElementById('image')
const promptElement = document.getElementById('prompt')
const button1Element = document.getElementById('opt-btn-1')
const button2Element = document.getElementById('opt-btn-2')
const restartButtonElement = document.getElementById('restart')


/* --------------------------------- Event Listeners --------------------------------- */
button1Element.addEventListener('click', handleClickButton1)
button2Element.addEventListener('click', handleClickButton2)
restartButtonElement.addEventListener('click', init)

/* --------------------------------- Functions  --------------------------------- */

init()

function init() {
  promptIdx = 0
  button1Element.style.display = 'revert'
  button2Element.style.display = 'revert'
  showNextStoryObj(promptIdx)
}

function showNextStoryObj(nextIdx) {
  // display next prompt (+ corresponding image and options) based on its index in the storyObjs array
  imgElement.setAttribute('src', storyObjs[nextIdx].image)
  promptElement.textContent = storyObjs[nextIdx].prompt
  button1Element.textContent = storyObjs[nextIdx].options[0].opt1
  button2Element.textContent = storyObjs[nextIdx].options[1].opt2
}

// function showWinner(nextIdx) {
//   // display next prompt (+ corresponding image and options) based on its index in the storyObjs array
//   imgElement.setAttribute('src', storyObjs[nextIdx].image)
//   promptElement.textContent = storyObjs[nextIdx].prompt
//   console.log(`Winner!`)
//   // button1Element.textContent = storyObjs[nextIdx].options[0].opt1
//   // button2Element.textContent = storyObjs[nextIdx].options[1].opt2
// }

// function showLoser(nextIdx) {
//   // display next prompt (+ corresponding image and options) based on its index in the storyObjs array
//   imgElement.setAttribute('src', storyObjs[nextIdx].image)
//   promptElement.textContent = storyObjs[nextIdx].prompt
//   console.log(`Loser!`)
//   // button1Element.textContent = storyObjs[nextIdx].options[0].opt1
//   // button2Element.textContent = storyObjs[nextIdx].options[1].opt2
// }

function handleClickButton1() {
  let newIdx = storyObjs[promptIdx].options[0].goTo
  promptIdx = newIdx
  if (winningIdxVals.includes(newIdx)) {
    // game has been won
    // display corresponding final image and prompt
    // replace option buttons with restart button (re-labeled "Start a new treasure hunt?")
    // showWinner(newIdx)
    imgElement.setAttribute('src', storyObjs[newIdx].image)
    promptElement.textContent = storyObjs[newIdx].prompt
    button1Element.style.display = 'none'
    button2Element.style.display = 'none'
    console.log(`Winner!`)
  }
  if (losingIdxVals.includes(newIdx)) {
    // game has been lost
    // display corresponding final image and prompt
    // replace option buttons with restart button (re-labeled "Try again?")
    // showLoser(newIdx)
    imgElement.setAttribute('src', storyObjs[newIdx].image)
    promptElement.textContent = storyObjs[newIdx].prompt
    button1Element.style.display = 'none'
    button2Element.style.display = 'none'
    console.log(`Loser!`)
  }
  showNextStoryObj(newIdx)
}



function handleClickButton2() {
  let newIdx = storyObjs[promptIdx].options[1].goTo
  promptIdx = newIdx
  if (winningIdxVals.includes(newIdx)) {
    // game has been won
    // display corresponding final image and prompt
    // replace option buttons with restart button (re-labeled "Start a new treasure hunt?")
    // showWinner(newIdx)
    imgElement.setAttribute('src', storyObjs[newIdx].image)
    promptElement.textContent = storyObjs[newIdx].prompt
    button1Element.style.display = 'none'
    button2Element.style.display = 'none'
    console.log(`Winner!`)
  }
  if (losingIdxVals.includes(newIdx)) {
    // game has been lost
    // display corresponding final image and prompt
    // replace option buttons with restart button (re-labeled "Try again?")
    // showLoser(newIdx)
    imgElement.setAttribute('src', storyObjs[newIdx].image)
    promptElement.textContent = storyObjs[newIdx].prompt
    button1Element.style.display = 'none'
    button2Element.style.display = 'none'
    console.log(`Loser!`)
  }
  showNextStoryObj(newIdx)
}
