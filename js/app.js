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


/*------- Cached Element References -------*/

/* CONST
  buttons
  image
  prompt
*/

const restartBtnEl = document.getElementById('restart')
const opt1BtnEl = document.getElementById('option1')
const opt2BtnEl = document.getElementById('option2')


/*------- Event Listeners -------*/

/* CONST
  option buttons
  reset button?
  any other clickables?
*/

restartBtnEl.addEventListener('click', init)
opt1BtnEl.addEventListener('click', handleClick)
opt2BtnEl.addEventListener('click', handleClick)

/*------- Functions -------*/

console.log(`Mulder, we're gonna steal the Declaration of Independence`)

init()

function init() {
  console.log(`Clicked Restart`)
}

function handleClick(evt) {
  console.log(`I clicked ${evt.target.id}!`)
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
  updateImage()
  updatePrompt()
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