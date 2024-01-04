
const storyEls = [
  {
    image: `image file 1`,
    promptNum: 1,
    prompt: `You are on the deck of the Charlotte and you find a door to the hull.`,
    options: [
      {
        opt1: `Open the door`,
        goTo: 3
      },
      {
        opt2: `Have a cigarette first`,
        goTo: 2
      }
    ]
  },
  {
    image: `image file 2`,
    promptNum: 2,
    prompt: `While everyone enjoys a cigarette on the deck of the Charlotte, finish early and look back at the door to the hull.`,
    options: [
      {
        opt1: `Tell the group to finish up so we can explore the hull together`,
        goTo: 4
      },
      {
        opt2: `Explore the hull with Riley`,
        goTo: 3
      }
    ]
  },
  {
    image: `image file 3`,
    promptNum: 3,
    prompt: `You and Riley crack open the frozen door and start down the steps into the hull, entering into the sailors barracks, which is mostly filled with hammocks. Ahead there's another door.`,
    options: [
      {
        opt1: `Walk straight through the barracks to the next door.`,
        goTo: 5
      },
      {
        opt2: `Pause while Riley peeks into one of the hammocks`,
        goTo: 6
      }
    ]
  },
  {
    image: `image file 4`,
    promptNum: 4,
    prompt: `You and Ian crack open the frozen door together and start down the steps into the hull. The group enters into the sailors barracks, which is mostly filled with hammocks. Ahead there's another door, but the group is still looking around, and Riley appears to be dangerously curious about the contents of the hammocks.`,
    options: [
      {
        opt1: `Walk straight through the barracks to the next door.`,
        goTo: 5
      },
      {
        opt2: `Wait while the group inspects the barracks`,
        goTo: 7
      }
    ]
  },
  {
    image: `image file 5`,
    promptNum: 5,
    prompt: `You pull open the next door and step into a cargo hold filled with barrels.`,
    options: [
      {
        opt1: `Crack open the first barrel you see!`,
        goTo: 9
      },
      {
        opt2: `Walk around the cargo hold to see if any of the barrels look special`,
        goTo: 10
      }
    ]
  },
  {
    image: `image file 6`,
    promptNum: 6,
    prompt: `Riley peeks into one of the hammocks to find a very frozen skeleton! Gross! He screams and falls to the ground in fear.`,
    options: [
      {
        opt1: `Help Riley up while the rest of the group joins you in the barracks`,
        goTo: 8
      },
      {
        opt2: `Ignore Riley while he cowers and go to the next door`,
        goTo: 5
      }
    ]
  },
  {
    image: `image file 7`,
    promptNum: 7,
    prompt: `Riley peeks into one of the hammocks to find a very frozen skeleton! Gross! He screams and falls to the ground in fear.`,
    options: [
      {
        opt1: `Help Riley up and ask him if he's okay`,
        goTo: 8
      },
      {
        opt2: `Ignore Riley while he cowers and go to the next door`,
        goTo: 5
      }
    ]
  },
]

const image = document.querySelector(".image")
const storyPrompt = document.querySelector(".prompt")
const optBtn1 = document.querySelector("#option1")
const optBtn2 = document.querySelector("#option2")

// function that pulls elements from the story array to be used in app.js
function next(promptNum) {
  image.textContent = storyEls.find(
    storyEl => storyEl.promptNum === promptNum
  ).image
  storyPrompt.textContent = storyEls.find(
    storyEl => storyEl.promptNum === promptNum
  ).storyPrompt  
  optBtn1.innerHTML = storyEls.find(
    storyEl => storyEl.promptNum === promptNum
  ).options.map(option => `<option value ="${option}">${option}</option>`).join("")
  optBtn2.innerHTML = storyEls.find(
    storyEl => storyEl.promptNum === promptNum
  ).options.map(option => `<option value ="${option}">${option}</option>`).join("")
}


function init() {
  next(1)
}

export {
  next,
  init,
}