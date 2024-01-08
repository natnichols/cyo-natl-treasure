// let winner = new Audio('../assets/audio/WINNEREvilPlanAudio.mp3')
let winner = new Audio('../assets/audio/WINNERStealToProtectAudio.mp3')
let loseAbigail = new Audio('../assets/audio/LOSECaughtByAbigail.mp3')
let loseFbi = new Audio('../assets/audio/LOSECaughtByFBI.mp3')

function playWinner() {
  // winner.volume = 0.25
  winner.play()
}

function playLoseAbigail() {
  // loseAbigail.volume = 0.25
  loseAbigail.play()
}

function playLoseFbi() {
  // loseFbi.volume = 0.25
  loseFbi.play()
}

export {
  playWinner,
  playLoseAbigail,
  playLoseFbi
}