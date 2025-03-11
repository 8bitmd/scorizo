const gameSetupForm = document.getElementById('setup-form')
const playerNameInputs = document.getElementById("names")
const scoreBoard = document.getElementById("game-counter")
const resetBtn = document.getElementById("reset")

let playerCount = 2
let pointsLimit = 51

window.onload = () => {
    generatePlayerInputs()
}

document.querySelector('#players').addEventListener('change', (e) => {
    playerCount = parseInt(e.target.value, 10)
    generatePlayerInputs()
})

document.querySelector('#points').addEventListener('change', (e) => {
    pointsLimit = parseInt(e.target.value, 10)
})

function generatePlayerInputs() {
    playerNameInputs.innerText = ""
    for (let i = 0; i < playerCount; i++) {
        const nameBox = document.createElement('input')
        nameBox.type = 'text'
        nameBox.placeholder = `Name for Player ${i + 1}`
        playerNameInputs.appendChild(nameBox)
    }
}

function createButton(label, change, pointsRef, displayRef) {
    const btn = document.createElement('button')
    btn.innerText = label
    btn.addEventListener('click', () => {
        pointsRef.value = Math.max(pointsRef.value + change, 0)
        displayRef.textContent = `${pointsRef.value} (${pointsLimit - pointsRef.value} to win)`
    })
    return btn
}

gameSetupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    scoreBoard.innerHTML = ""

    const playerNames = document.querySelectorAll('#names input')
    playerNames.forEach((name, index) => {
        const playerPanel = document.createElement('div')
        playerPanel.classList.add('player-card')

        const playerName = document.createElement('p')
        playerName.innerText = name.value.trim() !== "" ? name.value : `Player ${index + 1}`
        playerName.classList.add('player-name')

        const points = { value: 0 }
        const scoreDisplay = document.createElement('p')
        scoreDisplay.textContent = `${points.value} (${pointsLimit - points.value} to win)`
        scoreDisplay.classList.add('points-counter')

        const positiveButtons = document.createElement('div')
        positiveButtons.classList.add('positive-buttons')
        const negativeButtons = document.createElement('div')
        negativeButtons.classList.add('negative-buttons')

        const increments = [1, 3, 5, 10]
        increments.forEach((amount) => {
            const addBtn = createButton(`+ ${amount}`, amount, points, scoreDisplay)
            const removeBtn = createButton(`- ${amount}`, -amount, points, scoreDisplay)
            positiveButtons.appendChild(addBtn)
            negativeButtons.appendChild(removeBtn)
        })

        playerPanel.appendChild(playerName)
        playerPanel.appendChild(scoreDisplay)
        playerPanel.appendChild(positiveButtons)
        playerPanel.appendChild(negativeButtons)
        scoreBoard.appendChild(playerPanel)
    })
    gameSetupForm.classList.add('hidden')
})

resetBtn.addEventListener('click', () => {
    if (window.confirm("Are you sure?")) {
        gameSetupForm.reset()
        gameSetupForm.classList.remove('hidden')
        scoreBoard.innerHTML = ""
        playerCount = 2
        generatePlayerInputs()
    }
})