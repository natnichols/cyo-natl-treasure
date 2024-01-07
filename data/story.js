
const storyObjs = [
  {
    image: '../assets/images/image0.jpeg',
    promptNum: 0,
    prompt: `Your grandfather once shared the last known clue to find the treasure - "The Secret lies with Charlotte". The Charlotte was long suspected to be a ship lost at sea. After a long snowmobile ride through the Arctic, you, joined by Riley, Ian, and Ian's team, have finally found the Charlotte buried in the snow. After unearthing the ship, you step onto the deck and find a door to the hull.`,
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
    image: '../assets/images/image1.jpeg',
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
    image: '../assets/images/image2.jpeg',
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
    image: '../assets/images/image3.jpeg',
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
    image: '../assets/images/image4.jpeg',
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
    image: '../assets/images/image5.jpeg',
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
    image: '../assets/images/image5.jpeg',
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
  // WIN/LOSE OBJECTS BELOW, new story objects will be added above
  {
    image: '../assets/images/CHUGCHAMPAGNEWINNER.jpeg',
    promptNum: 7,
    prompt: `YOU'VE WON! The Declaration is yours and with it the map to the treasure.
    Want to start a new treasure hunt? Click the Restart button to play again!`,
    // option buttons are removed from display, no Options object needed
  },
  {
    image: '../assets/images/LOSECaughtByAbigail.jpeg',
    promptNum: 8,
    prompt: `You lost! You successfully stole the Declaration before Ian, but you were caught by Abigail before Riley could drive you away. 
    Want to start a new treasure hunt? Click the Restart button to play again!`,
    // option buttons are removed from display, no Options object needed
  },
  {
    image: '../assets/images/LOSECaughtByFBI.jpeg',
    promptNum: 9,
    prompt: `You lost! While you successfully stole the Declaration from the National Archives, the FBI tracked you down and you were arrested. Someone's got to go to prison, Ben! 
    Want to try again from the beginning? Click the Restart button to play again!`,
    // option buttons are removed from display, no Options object needed
  },
]

export {
  storyObjs,
}

