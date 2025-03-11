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

gameSetupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    scoreBoard.innerHTML = ""

    const playerNames = document.querySelectorAll('#names input')
    playerNames.forEach((name, index) => {
        const playerPanel = document.createElement('div')
        playerPanel.classList.add('player-card')
        const playerName = document.createElement('p')

        playerName.innerText = name.value.trim() !== "" ? name.value : `Player ${index + 1}`;
        playerName.classList.add('player-name')

        let points = 0
        const scoreDisplay = document.createElement('p')
        scoreDisplay.textContent = `${points} (${pointsLimit - points} to win)`
        scoreDisplay.classList.add('points-counter')

        const addOneBtn = document.createElement('button')
        addOneBtn.innerText = '+ 1'
        addOneBtn.addEventListener('click', () => {
            points++
            scoreDisplay.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const addThreeBtn = document.createElement('button')
        addThreeBtn.innerText = '+ 3'
        addThreeBtn.addEventListener('click', () => {
            points += 3
            scoreDisplay.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const addFiveBtn = document.createElement('button')
        addFiveBtn.innerText = '+ 5'
        addFiveBtn.addEventListener('click', () => {
            points += 5
            scoreDisplay.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const addTenBtn = document.createElement('button')
        addTenBtn.innerText = '+ 10'
        addTenBtn.addEventListener('click', () => {
            points += 10
            scoreDisplay.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const removeOneBtn = document.createElement('button')
        removeOneBtn.innerText = '- 1'
        removeOneBtn.addEventListener('click', () => {
            if (points - 1 >= 1) {
                points -= 1
            } else {
                points = 0
            }
            scoreDisplay.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const removeThreeBtn = document.createElement('button')
        removeThreeBtn.innerText = '- 3'
        removeThreeBtn.addEventListener('click', () => {
            if (points - 3 >= 1) {
                points -= 3
            } else {
                points = 0
            }
            scoreDisplay.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const removeFiveBtn = document.createElement('button')
        removeFiveBtn.innerText = '- 5'
        removeFiveBtn.addEventListener('click', () => {
            if (points - 5 >= 1) {
                points -= 5
            } else {
                points = 0
            }
            scoreDisplay.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const removeTenBtn = document.createElement('button')
        removeTenBtn.innerText = '- 10'
        removeTenBtn.addEventListener('click', () => {
            if (points - 10 >= 1) {
                points -= 10
            } else {
                points = 0
            }
            scoreDisplay.textContent = `${points} (${pointsLimit - points} to win)`
        })

        const positiveButtons = document.createElement('div')
        positiveButtons.classList.add('positive-buttons')
        const negativeButtons = document.createElement('div')
        negativeButtons.classList.add('negative-buttons')

        playerPanel.appendChild(playerName)
        playerPanel.appendChild(scoreDisplay)
        positiveButtons.appendChild(addOneBtn)
        positiveButtons.appendChild(addThreeBtn)
        positiveButtons.appendChild(addFiveBtn)
        positiveButtons.appendChild(addTenBtn)
        negativeButtons.appendChild(removeOneBtn)
        negativeButtons.appendChild(removeThreeBtn)
        negativeButtons.appendChild(removeFiveBtn)
        negativeButtons.appendChild(removeTenBtn)
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