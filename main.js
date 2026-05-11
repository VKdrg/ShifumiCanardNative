// creating elements variables
    // Header

    // Wrapper
        // Computer part
            let computerGame = document.getElementById('computerGame')
            let userGame = document.getElementById('userGame')
            let computerScore = 0
            let playerScore = 0
            let scores = document.getElementById('scores')
            scores.textContent = `Scores : Computer: ${computerScore} - Player: ${playerScore}`
            const results = document.getElementById('results')
            const btnReset = document.getElementById('btnReset')
            
            // Player part
            const button1 = document.getElementById('button-rock')
            const button2 = document.getElementById('button-paper')
            const button3 = document.getElementById('button-scissors')

            // Results
            const resultH2 = document.getElementById('resultH2')
            const resultP= document.getElementById('resultP')
            let roundResult = document.getElementById('roundResult')

    // Footer


// prototype

    /**
     * Game
     * @param {String} userTurn 
     */

    function Game(userTurn) {
        
        const keyMatch = {
            "0": "rock",
            "1": "paper",
            "2": "scissors"
        }
                
        let computerRandom = Math.floor(Math.random() * 3)
        let computerTurn = keyMatch[computerRandom]
        
        if (computerTurn ===  'rock') {
            computerGame.classList.add('fa-hand-fist')
            computerGame.classList.remove('fa-hand', 'fa-hand-peace')
        }
        else if (computerTurn ===  'paper') {
        computerGame.classList.add('fa-hand')
        computerGame.classList.remove('fa-hand-peace', 'fa-hand-fist')
        }
        else{
            computerGame.classList.add('fa-hand-peace')
            computerGame.classList.remove('fa-hand', 'fa-hand-fist')
        }
        
        if (userTurn === 'rock') {
            userGame.classList.add('fa-hand-fist')
            userGame.classList.remove('fa-hand', 'fa-hand-peace')
        }
        else if (userTurn === 'paper') {
            userGame.classList.add('fa-hand')
            userGame.classList.remove('fa-hand-peace', 'fa-hand-fist')
        }
        else {
            userGame.classList.add('fa-hand-peace')
            userGame.classList.remove('fa-hand', 'fa-hand-fist')
        }

        console.log(`Computer : ${computerTurn} - Player : ${userTurn}`)
        
        if ((computerTurn == 'rock' && userTurn == 'paper' )|| (computerTurn == 'paper' && userTurn == 'scissors') || (computerTurn == 'scissors' && userTurn == 'rock')) {
            localStorage.setItem("playerScore", playerScore++)
            roundResult.textContent = 'Player wins the round !'
        }
        else if (computerTurn == userTurn) {
            localStorage.setItem("playerScore", playerScore++)
            localStorage.setItem("computerScore", computerScore++)
            roundResult.textContent = 'That\'s a draw !'
        }
        else {
            localStorage.setItem("computerScore", computerScore++)
            roundResult.textContent = 'Computer wins the round !'
        }

        if (playerScore === 5 || computerScore === 5) {
            console.log('end')
            if (playerScore > computerScore) {
                resultH2.textContent = 'You won !'
                resultP.textContent = 'Big canard for you.'
                results.style.display = 'flex'
                button1.setAttribute('disabled', '')
                button2.setAttribute('disabled', '')
                button3.setAttribute('disabled', '')
            }
            else if (playerScore < computerScore) {
                resultH2.textContent = 'You Lost !'
                resultP.textContent = 'No canard for you.'
                results.style.display = 'flex'
                button1.setAttribute('disabled', '')
                button2.setAttribute('disabled', '')
                button3.setAttribute('disabled', '')
            }
            else {
                resultH2.textContent = 'It\'s a draw!'
                resultP.textContent = 'Try again to see if you can win.'
                results.style.display = 'flex'
                button1.setAttribute('disabled', '')
                button2.setAttribute('disabled', '')
                button3.setAttribute('disabled', '')
            }
        }
        
        scores.textContent = `Scores : Computer: ${computerScore} - Player: ${playerScore}`
    }
    
    button1.addEventListener('click', () => { 
        Game('rock')
    })
    button2.addEventListener('click', ()=> { 
        Game('paper')
    })
    button3.addEventListener('click', () => { 
        Game('scissors')
    })
    
    btnReset.addEventListener('click', () => {
        computerScore = 0
        playerScore = 0
        results.style.display = 'none'
        button1.removeAttribute('disabled')
        button2.removeAttribute('disabled')
        button3.removeAttribute('disabled')
        scores.textContent = `Scores : Computer: ${computerScore} - Player: ${playerScore}`
    })