const game = () => {
    let pScore = 0;
    let cScore = 0;
    let winner = document.querySelector('.winner');

    
    //start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const intro = document.querySelector('.intro');
        const match = document.querySelector('.match');
        playBtn.addEventListener('click', () => {
            intro.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const computerOptions = ['rock', 'paper', 'scissors']

        options.forEach(option => {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice =  computerOptions[computerNumber];

                //compare the hands
                compareHands(this.textContent, computerChoice);

                //update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;

                //update score
                updateScore();   
                
            });
            
        });
        
    };

    const compareHands = (playerChoice, computerChoice) => {
        if(playerChoice === computerChoice) {
            winner.textContent = `It's a tie`;
            return;
        }

        if(playerChoice === 'rock') {
            if(computerChoice === 'paper') {
                winner.textContent = `Computer wins`;
            } else {
                winner.textContent = `Player wins`;
            }
            return;
        }

        if(playerChoice === 'paper') {
            if(computerChoice === 'scissors') {
                winner.textContent = `Computer wins`;
            } else {
                winner.textContent = `Player wins`;
            }
            return;
        }

        if(playerChoice === 'scissors') {
            if(computerChoice === 'rock') {
                winner.textContent = `Computer wins`;
            } else {
                winner.textContent = `Player wins`;
            }
            return;
        }
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        if(winner.textContent === `Player wins`) {
            pScore += 1;
        } else if(winner.textContent === `Computer wins`) {
            cScore += 1;
        }

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

        if(pScore ==3 || cScore === 3) {
            endGame(playerScore, computerScore);
        }

    };

    const endGame = (playerScore, computerScore) => {
        if(pScore == 3) {
            winner.textContent = `Player won`;
        } else {
            winner.textContent = `Computer won`
        }
        pScore = cScore = 0;

        const match = document.querySelector('.match');
        button = document.createElement('button');
        button.classList.add('play-again', 'play-again1');
        match.appendChild(button);

        button.addEventListener('click', () => {
            button.classList.add('fadeOut');
            button.ClassList.remove('play-again', 'play-again1');
            winner.textContent = `Choose an option`;
            game();
        });
    };



    //all function calls
    startGame();
    playMatch();
};


game();