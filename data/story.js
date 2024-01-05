
const storyObjs = [
  {
    image: `image file 0`,
    promptNum: 0,
    prompt: `You are on the deck of the Charlotte and you find a door to the hull.`,
    options: [
      {
        opt1: `Open the door`,
        goTo: 2
      },
      {
        opt2: `Explore the deck first`,
        goTo: 1
      }
    ]
  },
  {
    image: `image file 1`,
    promptNum: 1,
    prompt: `You explore the deck but don't see anything remarkable. While Ian's crew looks around, you walk back to the door to the hull with Riley.`,
    options: [
      {
        opt1: `Gather the whole group to explore the hull together`,
        goTo: 3
      },
      {
        opt2: `Explore the hull with Riley`,
        goTo: 2
      }
    ]
  },
  {
    image: `image file 2`,
    promptNum: 2,
    prompt: `You and Riley crack open the frozen door and start down the steps into the hull, entering into the sailors barracks, which is mostly filled with hammocks. Ahead there's another door.`,
    options: [
      {
        opt1: `Walk straight through the barracks to the next door.`,
        goTo: 4
      },
      {
        opt2: `Pause while Riley peeks into one of the hammocks`,
        goTo: 5
      }
    ]
  },
  {
    image: `image file 3`,
    promptNum: 3,
    prompt: `You and Ian crack open the frozen door together and start down the steps into the hull. The group enters into the sailors barracks, which is mostly filled with hammocks. Ahead there's another door, but the group is still looking around, and Riley appears to be dangerously curious about the contents of the hammocks.`,
    options: [
      {
        opt1: `Walk straight through the barracks to the next door.`,
        goTo: 4
      },
      {
        opt2: `Wait while the group inspects the barracks`,
        goTo: 6
      }
    ]
  },
  {
    image: `image file 4`,
    promptNum: 4,
    prompt: `You pull open the next door and step into a cargo hold filled with barrels.`,
    options: [
      {
        opt1: `Crack open the first barrel you see!`,
        goTo: 8
      },
      {
        opt2: `Walk around the cargo hold to see if any of the barrels look special`,
        goTo: 9
      }
    ]
  },
  {
    image: `image file 5`,
    promptNum: 5,
    prompt: `Riley peeks into one of the hammocks to find a very frozen skeleton! Gross! He screams and falls to the ground in fear.`,
    options: [
      {
        opt1: `Help Riley up while the rest of the group joins you in the barracks`,
        goTo: 7
      },
      {
        opt2: `Ignore Riley while he cowers and go to the next door`,
        goTo: 4
      }
    ]
  },
  {
    image: `image file 6`,
    promptNum: 6,
    prompt: `Riley peeks into one of the hammocks to find a very frozen skeleton! Gross! He screams and falls to the ground in fear.`,
    options: [
      {
        opt1: `Help Riley up and ask him if he's okay`,
        goTo: 7
      },
      {
        opt2: `Ignore Riley while he cowers and go to the next door`,
        goTo: 4
      }
    ]
  },
]

export {
  storyObjs,
}

/* ----------- v v v - old code + pseudo below - v v v ----------- */
// const image = document.querySelector(".image")
// const storyPrompt = document.querySelector(".prompt")
// const optBtn1 = document.querySelector("#option1")
// const optBtn2 = document.querySelector("#option2")

// function that pulls elements from the story array to be used in app.js
// function next(promptNum) {
//   image.textContent = storyEls.find(
//     storyEl => storyEl.promptNum === promptNum
//   ).image
//   storyPrompt.textContent = storyEls.find(
//     storyEl => storyEl.promptNum === promptNum
//   ).storyPrompt
//   /* currently option buttons are showing the full options array instead of just the object that corresponds to opt1 or opt2 */
//   optBtn1.innerHTML = storyEls.find(
//     storyEl => storyEl.promptNum === promptNum
//   ).options.map(option => `<option value ="${option.opt1}">${option.opt1}</option>`).join("")
//   optBtn2.innerHTML = storyEls.find(
//     storyEl => storyEl.promptNum === promptNum
//   ).options.map(option => `<option value ="${option.opt2}">${option.opt2}</option>`).join("")
// }
/* ----------- ^ ^ ^ - old code + pseudo above - ^ ^ ^ ----------- */
