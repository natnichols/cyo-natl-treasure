# 📜 Hunt Your Own National Treasure 🪙

#### A Choose Your Own Adventure Game inspired by the cinematic masterpiece _National Treasure_ (2004)

> "Ben, you can't steal the Declaration of Independence. It's like stealing a national monument...not that it _can't_ be done - but it ***_shouldn't_*** be done." 🗽

![Screencap from National Treasure of Ben Gates with the Declaration](/assets/images/MovieScreencap1.jpeg)

_We'll see about that._

Your name is Benjamin Franklin Gates, you are the last of a line of discgraced treasure hunters, and you are determined to find the legendary Knights Templar Treasure that your grandfather told you about as a kid. You have put together a team: your trusty tech buddy Riley Poole, your benefactor Ian, and Ian's group of henchmen. Together, you're going to find the treasure and redeem your family's name.

But to find a treasure, you need a map. And what better place for the map to be hidden than on the back of the Declaration of Independence? But you can't exactly...borrow it.

![Screenshot of the first page of the game](/assets/images/gameScreenshotFirstPage.png)

The goal of this game is to successfully steal the Declaration of Independence. As you move through the story, you will be presented with a decision to make and two option buttons to choose from. Each time you click an option button, you will advance the story into a new scene in your own unique adventure. Choose wisely, and your hunt will end in success! Choose poorly, and the fate of your hunt could be ruinous.

![Screencap from National Treasure of Ben Gates with the Declaration](/assets/images/MovieScreencap2.jpeg)
> Someone's got to go to prison, Ben. ⚖️

If you don't like how your treasure hunt is going and you regret some of your choices, click the Restart button under title to start fresh at the starting decision with a new hunt.

## So, do you think you can steal the Declaration of Independence? [Start Your Treasure Hunt Here](http://natl-treasure-cyoadventure.netlify.app "Hunt Your Own National Treasure") 📜

![Screenshot of the winning page of the game](/assets/images/WINNERChampagneTreasonToast.png)

## Attributions 🎉
* Fonts are sourced from [Google Fonts](https://fonts.google.com/ "Browse Google Fonts"), and additional font research was found in the [r/identifythisfont Subreddit](https://www.reddit.com/r/identifythisfont "r/identifythisfont")
* Images are sourced from [HD/HQ Movie Screencaps Gallery](https://kissthemgoodbye.net/movie/thumbnails.php?album=309 "HD/HQ Movie Screencaps Gallery - kissthemgoodbye.net") and [FanCaps.net](https://fancaps.net/ "FanCaps.net")
* New methods research found in [MDN Web Docs](https://developer.mozilla.org/en-US/ "MDN Web Docs") and the [r/learnjavascript Subreddit](https://www.reddit.com/r/learnjavascript "r/learnjavascript") 
* Confetti code is from [GA's SEI Github (Private Repository)](https://github.com/SEI-Remote/confetti/blob/main/confetti.js "SEI-Remote/confetti GitHub Repo")

## Technologies used 🧰
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Ice Box 🧊
- [x] Confetti!
- [ ] Sound Effects
- [ ] Light/Dark Mode
- [ ] Mobile responsiveness
- [ ] Fun cursor
- [ ] Intro sequence (modeled after Christopher Plummer scene from movie) that summarizes the lore of the Knights Templar Treasure, as well as the plot of the story up to the point where the player begins the game 
  - [ ] Include animations
- [ ] Toggle sound on/off button
- [ ] Start/Main Menu screen that loads before game starts, containing the game title, an image, and a button to click to start the game. Also leaves room in the display for more buttons to be added as icebox features are added.
- [ ] Pre-Main Menu screen animation
  - [ ] Image of all-seeing eye (holographic, transparent) slowly blinking/fading in and out on opening screen, something clearly clickable (‘start’ or ‘open’ as a placeholder) clearly indicating to the player that when they click they will be taken to a start/main menu screen
- [ ] Ability for player to save and load unfinished games
  - [ ] Add Load Game button to main menu that, when clicked, renders a message to the player to click a button to open their saved game, which takes them to the last prompt the player received before saving.
  - [ ] Add ability to save up to 3 files. Clicking the Load Game button would then render a message to the player to click to click on the save file they want to load, and 3 clickable containers will be displayed that correspond to up to 3 different save files. If the player has fewer than 3 saved games, the unused containers will not be clickable.
  - [ ] Add ability to save even more than 3 files
- [ ] Player settings button - renders container with message and menu of buttons the user can click to:
  - Adjust sound volume
  - Save game
  - Start Over
  - Return to menu
  - [ ] After Settings button is built in, these buttons will only be in the Settings menu, and no longer rendered individually on screen while the game is being played
- [ ] ***_Extended story:_***
  - [ ] Initial game will only include the plot up through Ben initially stealing the Declaration from the National Archives
  - [ ] Add an option for the player to either end the game, or to continue the story after the Archives plot ends and attempt to find the Knights Templar treasure itself. If they choose to continue, the player gets to:
    - Decide if/when to tell Ben’s father that he stole the Declaration
    - Travel from DC to Philadelphia and NYC while continuing to protect the Declaration from Ian, run from the FBI, and find more clues leading to the treasure
    - Find the treasure and decide what to do with it! (If they can escape the underground caverns where it’s hidden!)
- [ ] Cheat code features (player loads game and types out a code before clicking any buttons)
  - [ ] Accurate DC Traffic Laws Mode - Parking and getting back to the getaway van with the Declaration gets more challenging!
  - [ ] Confetti Mode - Confetti animation runs with both Win and Lose endings, as well as random prompts throughout the game
  - [ ] Romantic Tension Mode - Can you steal the Declaration **_and_** Abigail's heart? (would still be 2000’s Disney PG rated)
  - [ ] 🧊🧊 **Extra Icy:** Sean Bean Mode - Player swaps characters and plays through the game as Sean Bean’s character, Ian. Will be a large undertaking as it will mean rewriting a second version of the game, but from Ian’s POV
- [ ] Flesh out dialogue and extra bits of story that the player can click through and read between Decision Points in the game
  - [ ] 🧊🧊 **Extra Icy:** animations when clicking through back-and-forth dialogue between two characters, eg. speaker is more pronounced/in foreground, listener is less pronounced/slightly greyed out/closer to background
- [ ] 🧊🧊🧊 ***_Ultra Icy:_*** Computer player
  - [ ] Computer controls Sean Bean, computer’s decisions can both positively and negatively affect the player’s chances of winning

### [View my Planning Materials](https://docs.google.com/document/d/1ZFDcidKbpyUpEmeshoS9aI2OC8LTM0BoioFQvgvnPTU/edit?usp=sharing "Hunt Your Own National Treasure Planning Materials") 🗒
