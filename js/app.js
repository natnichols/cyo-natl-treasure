/* --------------------------------- Constants --------------------------------- */
import {storyObjs} from '../data/story.js'

  /* ----------- v v v - old code + pseudo below - v v v ----------- 
  / Imports from Data files: 
  audio
  images 
  story 
  prompts
  options 
  endings
  */
  //  import { storyEls } from "../data/story.js";
  /* ----------- ^ ^ ^ - old code + pseudo above - ^ ^ ^ ----------- */

/* --------------------------------- Variables (state) --------------------------------- */
let promptIdx
let winningIdxVals = [/*12, 15, 16*/]
let losingIdxVals = [/*2, 3, 6*/]

  /* ----------- v v v - old code + pseudo below - v v v ----------- 
  /* LET (DON'T NEED TO HOLD VALUES YET - 
  DO THAT IN INIT FUNCTION)
  story (OBJECT)
  image
  prompt
  ending
  options
  win
  lose
  */
  // let win, lose
  // let story = []
  /* ----------- ^ ^ ^ - old code + pseudo above - ^ ^ ^ ----------- */



/* --------------------------------- Cached Element References --------------------------------- */

const imgElement = document.getElementById('image')
const promptElement = document.getElementById('prompt')
const button1Element = document.getElementById('opt-btn-1')
const button2Element = document.getElementById('opt-btn-2')
const restartButtonElement = document.getElementById('restart')

  /* -------------- v v v - old code within - v v v -------------- 
  const storyContainer = document.getElementById('story-container')
  const imgPromptContainer = document.getElementById('img-prompt-container')
  const imageEl = document.getElementsByClassName('image')
  const promptEl = document.getElementsByClassName('prompt')
  const optionContainer = document.getElementById('option-container')
  const optionButtons = document.getElementsByClassName('option')
  const restartBtnEl = document.querySelector('#restart')
  const image = document.querySelector(".image")
  const storyPrompt = document.querySelector(".prompt")
  const optBtn1 = document.getElementById('option1')
  const optBtn2 = document.getElementById('option2')
  -------------- ^ ^ ^ - old code above - ^ ^ ^ -------------- */

/* --------------------------------- Event Listeners --------------------------------- */
button1Element.addEventListener('click', handleClickButton1)
button2Element.addEventListener('click', handleClickButton2)
restartButtonElement.addEventListener('click', init)

/* ----------- v v v - old code + pseudo below - v v v ----------- 
/* option buttons
reset button?
any other clickables?*/
//  restartBtnEl.addEventListener('click', init)
//  optBtn1.addEventListener('click', optionClick)
//  optBtn2.addEventListener('click', optionClick)
//  // optBtn1.addEventListener('click', next(option1))
//  // optBtn2.addEventListener('click', next(option2))
/* ----------- ^ ^ ^ - old code + pseudo above - ^ ^ ^ ----------- */

/* --------------------------------- Functions  --------------------------------- */
console.log(`Mulder, we're gonna steal the Declaration of Independence`)


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



/* ---------------------------------------------------------------------------------------- */
/* ----------- v v v - old function code + pseudo below - v v v ----------- */
// init()

// function init() {
//   render()
// }

// function render() {
//   image.innerHTML = ''
//   story.forEach((storyEl, idx) => {
//     next(storyEl, idx)
//   })
// }

// // function next(promptNum) {
// //   image.textContent = storyEls.find(
// //     storyEl => storyEl.promptNum === storyEl.image
// //   )
// //   storyPrompt.textContent = storyEls.find(
// //     storyEl => storyEl.promptNum === storyEl.prompt
// //   )
// //   /* currently option buttons are showing the full options array instead of just the object that corresponds to opt1 or opt2 */
// //   optBtn1.innerHTML = storyEls.find(
// //     storyEl => storyEl.promptNum === promptNum
// //   ).options.map((option, idx) => (`<option value ="${option.opt1}">${option.opt1}</option>`)).join("")
// //   optBtn2.innerHTML = storyEls.find(
// //     storyEl => storyEl.promptNum === promptNum
// //   ).options.map((option, idx) => (`<option value ="${option.opt2}">${option.opt2}</option>`)).join("")
// // }

// function optionClick(evt) {
//   console.log(`I clicked ${evt.target.id}!`)
//   const newStory = next()
//   story.push(newStory)
//   console.log(story)
//   render()
// }

// function render() {
//   story.forEach((storyEl, idx) => {
//     updateStory(storyEl, idx)
//   })
// }

// function updateStory(storyEl, idx) {
//   imgPromptContainer.innerHTML = ''
//   updateImage(storyEl, idx)
//   updatePrompt(storyEl, idx)
//   optionContainer.innerHTML = ''
//   updateOptions(storyEl, idx)
//   story.splice(idx, 1)
//   // imgPromptContainer.style.background = 'orange'
// }

// function updateImage(storyEl, idx) {
//   let newImage = document.createElement("div")
//   newImage.className = `image`
//   newImage.innerHTML =
//   /* consider putting a ternary in this div based on option 1 or 2 --> see appendQuote in Shake-It-Off */
//   `<div>
//     <p>${story.imageEl}</p>
//   </div>`
//   newImage.style.background = 'pink'
//   imgPromptContainer.appendChild(newImage)
// }

// function updatePrompt(storyEl, idx) {
//   let newPrompt = document.createElement("div")
//   newPrompt.className = `prompt`
//   newPrompt.innerHTML =
//   /* consider putting a ternary in this div based on option 1 or 2 --> see appendQuote in Shake-It-Off */
//   `<div>
//     <p>${story.promptEl}</p>
//   </div>`
//   newPrompt.style.background = 'white'
//   imgPromptContainer.appendChild(newPrompt)
// }

// function updateOptions(storyEl, idx) {
//   // make this into a forEach loop??
//   let newOption1 = document.createElement("button")
//   newOption1.className = `option`
//   newOption1.id = `option1`
//   newOption1.innerHTML =
//   /* consider putting a ternary in this div based on option 1 or 2 --> see appendQuote in Shake-It-Off */
//   `<button>
//     <p>${opt1BtnEl.id}</p>
//   </button>`
//   newOption1.style.background = 'green'
//   optionContainer.appendChild(newOption1)
//   let newOption2 = document.createElement("button")
//   newOption2.className = `option`
//   newOption2.id = `option2`
//   newOption2.innerHTML =
//   /* consider putting a ternary in this div based on option 1 or 2 --> see appendQuote in Shake-It-Off */
//   `<button>
//     <p>${opt2BtnEl.id}</p>
//   </button>`
//   newOption2.style.background = 'green'
//   optionContainer.appendChild(newOption2)
// }
/* ----------- ^ ^ ^ - old function code + pseudo above - ^ ^ ^ ----------- */
