const setupForm = document.getElementById('setup-form')
const playerNamesForm = document.getElementById("names")
const gameCounter = document.getElementById("game-counter")
const resetBtn = document.getElementById("reset")

let playerCount = 2
let pointsLimit = 51

window.onload = () => {
    updatePlayerCount()
}

document.querySelector('#players').addEventListener('change', (e) => {
    playerCount = parseInt(e.target.value, 10)
    updatePlayerCount()
})

document.querySelector('#points').addEventListener('change', (e) => {
    pointsLimit = parseInt(e.target.value, 10)
})

function updatePlayerCount() {
    playerNamesForm.innerText = ""
    for (let i = 0; i < playerCount; i++) {
        const nameBox = document.createElement('input')
        nameBox.type = 'text'
        nameBox.placeholder = `Name for Player ${i + 1}`
        playerNamesForm.appendChild(nameBox)
    }
}

setupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    gameCounter.innerHTML = ""

    const playerNames = document.querySelectorAll('#names input')
    playerNames.forEach((name, index) => {
        const playerCard = document.createElement('div')
        playerCard.classList.add('player-card')
        const playerName = document.createElement('p')

        playerName.innerText = name.value.trim() !== "" ? name.value : `Player ${index + 1}`;
        playerName.classList.add('player-name')

        let points = 0
        const pointsCounter = document.createElement('p')
        pointsCounter.textContent = `${points} (${pointsLimit - points} to win)`
        pointsCounter.classList.add('points-counter')

        const addOneBtn = document.createElement('button')
        addOneBtn.innerText = '+ 1'
        addOneBtn.addEventListener('click', () => {
            points++
            pointsCounter.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const addThreeBtn = document.createElement('button')
        addThreeBtn.innerText = '+ 3'
        addThreeBtn.addEventListener('click', () => {
            points += 3
            pointsCounter.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const addFiveBtn = document.createElement('button')
        addFiveBtn.innerText = '+ 5'
        addFiveBtn.addEventListener('click', () => {
            points += 5
            pointsCounter.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const addTenBtn = document.createElement('button')
        addTenBtn.innerText = '+ 10'
        addTenBtn.addEventListener('click', () => {
            points += 10
            pointsCounter.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const removeOneBtn = document.createElement('button')
        removeOneBtn.innerText = '- 1'
        removeOneBtn.addEventListener('click', () => {
            if (points - 1 >= 1) {
                points -= 1
            } else {
                points = 0
            }
            pointsCounter.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const removeThreeBtn = document.createElement('button')
        removeThreeBtn.innerText = '- 3'
        removeThreeBtn.addEventListener('click', () => {
            if (points - 3 >= 1) {
                points -= 3
            } else {
                points = 0
            }
            pointsCounter.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const removeFiveBtn = document.createElement('button')
        removeFiveBtn.innerText = '- 5'
        removeFiveBtn.addEventListener('click', () => {
            if (points - 5 >= 1) {
                points -= 5
            } else {
                points = 0
            }
            pointsCounter.textContent = `${points} (${pointsLimit - points} to win)`
        })
        const removeTenBtn = document.createElement('button')
        removeTenBtn.innerText = '- 10'
        removeTenBtn.addEventListener('click', () => {
            if (points - 10 >= 1) {
                points -= 10
            } else {
                points = 0
            }
            pointsCounter.textContent = `${points} (${pointsLimit - points} to win)`
        })

        const positiveButtons = document.createElement('div')
        positiveButtons.classList.add('positive-buttons')
        const negativeButtons = document.createElement('div')
        negativeButtons.classList.add('negative-buttons')

        playerCard.appendChild(playerName)
        playerCard.appendChild(pointsCounter)
        positiveButtons.appendChild(addOneBtn)
        positiveButtons.appendChild(addThreeBtn)
        positiveButtons.appendChild(addFiveBtn)
        positiveButtons.appendChild(addTenBtn)
        negativeButtons.appendChild(removeOneBtn)
        negativeButtons.appendChild(removeThreeBtn)
        negativeButtons.appendChild(removeFiveBtn)
        negativeButtons.appendChild(removeTenBtn)
        playerCard.appendChild(positiveButtons)
        playerCard.appendChild(negativeButtons)
        gameCounter.appendChild(playerCard)
    })
    setupForm.classList.add('hidden')
})

resetBtn.addEventListener('click', () => {
    if (window.confirm("Are you sure?")) {
        setupForm.reset()
        setupForm.classList.remove('hidden')
        gameCounter.innerHTML = ""
        playerCount = 2
        updatePlayerCount()
    }
})