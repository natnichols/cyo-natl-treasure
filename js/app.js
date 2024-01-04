/*------- Constants -------*/

/* 
  Imports from Data files: 
    audio
    images 
    story 
      prompts
      options 
      endings
*/


/*------- Variables (state) -------*/

/* LET (DON'T NEED TO HOLD VALUES YET - DO THAT IN INIT FUNCTION)
  story (OBJECT)
    image
    prompt
    options
    ending
  win
  lose
*/

let story = []
let win, lose


/*------- Cached Element References -------*/

const restartBtnEl = document.getElementById('restart')
const storyContainer = document.getElementById('story-container')
const imgPromptContainer = document.getElementById('img-prompt-container')
const imageEl = document.getElementsByClassName('image')
const promptEl = document.getElementsByClassName('prompt')
const optionContainer = document.getElementById('option-container')
const opt1BtnEl = document.getElementById('option1')
const opt2BtnEl = document.getElementById('option2')

/*------- Event Listeners -------*/

/* 
  option buttons
  reset button?
  any other clickables?
*/

restartBtnEl.addEventListener('click', init)
opt1BtnEl.addEventListener('click', handleClick)
opt2BtnEl.addEventListener('click', handleClick)

/*------- Functions -------*/

// console.log(`Mulder, we're gonna steal the Declaration of Independence`)

init()

function init() {
  let story = [
    {
      // imageToDisplay: '..assets/images/whatever.png',
      // promptNumber: 1,
      // prompt: 'You enter a room and see a door.',
      // options: [
      //   {
      //     option1: 'Open the door'
      //     goTo: 3
      //   }
      //   {
      //     option2: 'Examine the room you're currently in'
      //     goTo: 2
      //   }
      // ]
    }
  ]
  console.log(`stort me oop`)
}


function handleClick(evt) {
  console.log(`I clicked ${evt.target.id}!`)
  const newStory = updateStory()
  story.push(newStory)
  console.log(story)
  render()
}

function render() {
  imgPromptContainer.innerHTML = ''
  story.forEach(storyEl => {
    updateStory()
  })
}

function updateStory() {
  updateImage()
  updatePrompt()
  imgPromptContainer.style.background = 'orange'
  // updateOptions()
}

function updateImage() {
  let storyImage = document.createElement("div")
  storyImage.className = `image`
  storyImage.innerHTML =
  /* consider putting a ternary in this div based on option 1 or 2 --> see appendQuote in Shake-It-Off */
  `<div>
    <p>'new image!'</p>
  </div>`
  storyImage.style.background = 'pink'
  imgPromptContainer.appendChild(storyImage)
}

function updatePrompt() {
  let storyPrompt = document.createElement("div")
  storyPrompt.className = `prompt`
  storyPrompt.innerHTML =
  /* consider putting a ternary in this div based on option 1 or 2 --> see appendQuote in Shake-It-Off */
  `<div>
    <p>'new prompt!'</p>
  </div>`
  storyPrompt.style.background = 'white'
  imgPromptContainer.appendChild(storyPrompt)
}

function updateOptions() {
  
}

/*
  init()
    story (OBJECT) =
      image
      prompt
      options
      ending
    win =
    lose =
    render()
  handleClick()
  checkForWin()
  checkForLose()
  checkForEnding()
  updateStory()
  updateImage()
  updatePrompt()
  updateOptions()
  render()
 */


/* ESTABLISH INIT SKELETON - USE CURRENT WIREFRAME FOR ALL RENDERINGS FOR NOW AND WORRY ABOUT ADJUSTING LAYOUT BETWEEN START SCREEN>PROMPT 1 LATER! (THERE WILL BE AN EXTRA BUTTON ON THE START SCREEN FOR A SEC, DEAL WITH IT) */



/*------- example from Ben for game state variable (object) (to use for init function?) (or was it a constant to be put in a data file?):

let story = [
  {
    promptNumber: 1,
    imageToDisplay: '..assets/images/whatever.png',
    prompt: 'You enter a room and see a door.',
    options: [
      {
        option1: 'Open the door'
        goTo: 3
      }
      {
        option2: 'Examine the room you're currently in'
        goTo: 2
      }
    ]
  }
]
(was a render function somewhere in there??)
-------*/