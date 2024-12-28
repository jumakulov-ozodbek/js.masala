'use strict'
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const diceEl = document.querySelector('.dice')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')

let playing, score, currentScore, activePlayer
const init = () => {
	playing = true
	score = [0, 0]
	currentScore = 0
	activePlayer = 0

	score0El.textContent = 0
	score1El.textContent = 0
	current0El.textContent = 0
	current1El.textContent = 0

	diceEl.classList.add('hidden')
	player0El.classList.remove('player--winner')
	player1El.classList.remove('player--winner')
	player0El.classList.add('player--active')
	player1El.classList.remove('player--active')
}
init()
const switchPlayer = () => {
	currentScore = 0
	document.querySelector(`#current--${activePlayer}`).textContent = currentScore
	activePlayer = activePlayer === 0 ? 1 : 0
	console.log(activePlayer)
	player0El.classList.toggle('player--active')
	player1El.classList.toggle('player--active')
}

btnRoll.addEventListener('click', () => {
	if (playing) {
		const dice = Math.trunc(Math.random() * 6) + 1
		diceEl.classList.remove('hidden')
		diceEl.src = `dice-${dice}.png`
		if (dice !== 1) {
			currentScore += dice
			document.querySelector(`#current--${activePlayer}`).textContent = currentScore
		} else {
			switchPlayer()
		}
	}
})

btnHold.addEventListener('click', () => {
	if (playing) {
		score[activePlayer] += currentScore
		document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

		if (score[activePlayer] >= 100) {
			playing = false
			diceEl.classList.add('hidden')
			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

		} else {
			switchPlayer()
		}
	}
})


btnNew.addEventListener('click', init)
console.log(this.innerHTML);