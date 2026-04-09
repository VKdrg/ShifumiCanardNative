// creating elements variables
    // Header
        const surpriseBtn = document.getElementById('surprise')
        surpriseBtn.addEventListener('click', () => {
            // https://confetti.js.org/ => confetti effect on click of orange ducky
        })

    // Wrapper
        // Computer part
        // Player part
            const button1 = document.getElementById('button-rock')
            const button2 = document.getElementById('button-paper')
            const button3 = document.getElementById('button-scissors')
            // Results
            const resultH2 = document.getElementById('resultH2')
            const resultP= document.getElementById('resultP')
            let computerScore = 0
            localStorage.setItem("computerScore", computerScore)
            let playerScore = 0
            localStorage.setItem("playerScore", playerScore)
            
            
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
                
                let computerGame = document.getElementById('computerGame')
                if (computerTurn ===  'rock') {
                    computerGame.classList.toggle('fa-hand-fist')
                }
                else if (computerTurn ===  'paper') {
            computerGame.classList.toggle('fa-hand')
        }
        else{
            computerGame.classList.toggle('fa-hand-peace')
        }
        
        let userGame = document.getElementById('userGame')
        if (userTurn === 'rock') {
            userGame.classList.toggle('fa-hand-fist')
        }
        else if (userTurn === 'paper') {
            userGame.classList.toggle('fa-hand')
        }
        else {
            userGame.classList.toggle('fa-hand-peace')
        }
        
        
        // create empty and append computerTurn icon
        
        console.log(`Computer : ${computerTurn} - Player : ${userTurn}`)
        
        if ((computerTurn == 'rock' && userTurn == 'paper' )|| (computerTurn == 'paper' && userTurn == 'scissors') || (computerTurn == 'scissors' && userTurn == 'rock')) {
            localStorage.setItem("playerScore", playerScore++)
            resultH2.textContent = 'You won !'
            resultP.textContent = 'Big canard for you.'
            console.log('Player wins the round !')
        }
        else if (computerTurn == userTurn) {
            localStorage.setItem("playerScore", playerScore++)
            localStorage.setItem("computerScore", computerScore++)
            resultH2.textContent = 'It\'s a draw!'
            resultP.textContent = 'Try again to see if you can win.'
            console.log('That\'s a draw !')
        }
        else {
            localStorage.setItem("computerScore", computerScore++)
            resultH2.textContent = 'You Lost !'
            resultP.textContent = 'No canard for you.'
            console.log('Computer wins the round ! Cheh !')
        }
        
        console.log(`Scores : C: ${computerScore} - P: ${playerScore}`)
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