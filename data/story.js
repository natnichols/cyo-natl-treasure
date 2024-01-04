
const story = [
  {
    imageEl: `image file`,
    promptNumber: 1,
    promptEl: `You are on the deck of the Charlotte and you find a door to the hull.`,
    options: [
      {
        option1: `Open the door`,
        goTo: 3
      },
      {
        option2: `Have a cigarette first`,
        goTo: 2
      }
    ]
  },
  {
    imageEl: `image file`,
    promptNumber: 2,
    promptEl: `While everyone enjoys a cigarette on the deck of the Charlotte, finish early and look back at the door to the hull.`,
    options: [
      {
        option1: `Tell the group to finish up so we can explore the hull together`,
        goTo: 4
      },
      {
        option2: `Explore the hull with Riley`,
        goTo: 3
      }
    ]
  },
  {
    imageEl: `image file`,
    promptNumber: 3,
    promptEl: `You and Riley crack open the frozen door and start down the steps into the hull, entering into the sailors barracks, which is mostly filled with hammocks. Ahead there's another door.`,
    options: [
      {
        option1: `Walk straight through the barracks to the next door.`,
        goTo: 5
      },
      {
        option2: `Pause while Riley peeks into one of the hammocks`,
        goTo: 6
      }
    ]
  },
  {
    imageEl: `image file`,
    promptNumber: 4,
    promptEl: `You and Ian crack open the frozen door together and start down the steps into the hull. The group enters into the sailors barracks, which is mostly filled with hammocks. Ahead there's another door, but the group is still looking around, and Riley appears to be dangerously curious about the contents of the hammocks.`,
    options: [
      {
        option1: `Walk straight through the barracks to the next door.`,
        goTo: 5
      },
      {
        option2: `Wait while the group inspects the barracks`,
        goTo: 7
      }
    ]
  },
  {
    imageEl: `image file`,
    promptNumber: 5,
    promptEl: `You pull open the next door and step into a cargo hold filled with barrels.`,
    options: [
      {
        option1: `Crack open the first barrel you see!`,
        goTo: 9
      },
      {
        option2: `Walk around the cargo hold to see if any of the barrels look special`,
        goTo: 10
      }
    ]
  },
  {
    imageEl: `image file`,
    promptNumber: 6,
    promptEl: `Riley peeks into one of the hammocks to find a very frozen skeleton! Gross! He screams and falls to the ground in fear.`,
    options: [
      {
        option1: `Help Riley up while the rest of the group joins you in the barracks`,
        goTo: 8
      },
      {
        option2: `Ignore Riley while he cowers and go to the next door`,
        goTo: 5
      }
    ]
  },
  {
    imageEl: `image file`,
    promptNumber: 7,
    promptEl: `Riley peeks into one of the hammocks to find a very frozen skeleton! Gross! He screams and falls to the ground in fear.`,
    options: [
      {
        option1: `Help Riley up and ask him if he's okay`,
        goTo: 8
      },
      {
        option2: `Ignore Riley while he cowers and go to the next door`,
        goTo: 5
      }
    ]
  },
]

// function that pulls elements from the story array to be used in app.js
function getStoryPrompt() {
  // iterate through array of objects
  // identify the option elements in the nested option object array
  // identify go to element in both option elements
  // return prompt that corresponds to go to number
}

// export {
//   getStoryPrompt,
// }