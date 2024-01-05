/* --------------------------------- Constants --------------------------------- */
import {storyObjs} from '../data/story.js'

/* --------------------------------- Variables (state) --------------------------------- */
let promptIdx
let winningIdxVals = [/*12, 15, 16*/]
let losingIdxVals = [/*2, 3, 6*/]

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
  showNextStoryObj(promptIdx)
}

function showNextStoryObj(nextIdx) {
  // display next prompt (+ corresponding image and options) based on its index in the storyObjs array
  imgElement.setAttribute('src', storyObjs[nextIdx].image)
  promptElement.textContent = storyObjs[nextIdx].prompt
  button1Element.textContent = storyObjs[nextIdx].options[0].opt1
  button2Element.textContent = storyObjs[nextIdx].options[1].opt2
}



function handleClickButton1() {
  let newIdx = storyObjs[promptIdx].options[0].goTo
  promptIdx = newIdx
  if (winningIdxVals.includes(newIdx)) {
    // game has been won
    // display corresponding final image and prompt
    // replace option buttons with restart button (re-labeled "Start a new treasure hunt?")
  }
  if (losingIdxVals.includes(newIdx)) {
    // game has been lost
    // display corresponding final image and prompt
    // replace option buttons with restart button (re-labeled "Try again?")
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
  }
  if (losingIdxVals.includes(newIdx)) {
    // game has been lost
    // display corresponding final image and prompt
    // replace option buttons with restart button (re-labeled "Try again?")
  }
  showNextStoryObj(newIdx)
}
