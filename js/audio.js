// let winner = new Audio('../assets/audio/WINNEREvilPlanAudio.mp3')
let winner = new Audio('../assets/audio/WINNERStealToProtectAudio.mp3')
let loseAbigail = new Audio('../assets/audio/LOSECaughtByAbigailAudio.mp3')
let loseFbi = new Audio('../assets/audio/LOSECaughtByFBIAudio.mp3')

function playWinner() {
  winner.volume = 0.75
  winner.play()
}

function playLoseAbigail() {
  loseAbigail.volume = 0.30
  loseAbigail.play()
}

function playLoseFbi() {
  loseFbi.volume = 0.75
  loseFbi.play()
}

export {
  playWinner,
  playLoseAbigail,
  playLoseFbi
}