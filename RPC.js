const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        //first. the computer's options
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach(option=>{
            option.addEventListener('click', function(){
                const computerNumber =Math.floor(Math.random()*3); // Math.floor = deduce the largest or same constant of conclusion which is drawed by Math.random
                const computerChoice = computerOptions[computerNumber]; // Beforehand, I made the array of computer options"[rock,paper,scissors] and const "computerNumber" impose random number from 0 to 2 which is used for concluding what the computer choose amongst three options.
                
                compareHands(this.innerText,computerChoice);
                
                //Updates the icon that I chose
                playerHand.src =`./img/${this.textContent}.png`; // In this code, 'this' is the object(const options)
                computerHand.src=`./img/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice,computerChoice)=>{
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }//when the options between two is the same, the action is that.
        
        if(playerChoice === 'rock'){
            if (computerChoice === 'scissors'){
                winner.textContent = 'You wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }// when it comes to the situation that the player's option is 'rock'.
        }

        if(playerChoice === 'paper'){
            if (computerChoice === 'rock'){
                winner.textContent = 'You wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }// when it comes to the situation that the player's option is 'paper'.
        }

        if(playerChoice === 'scissors'){
            if (computerChoice === 'paper'){
                winner.textContent = 'You wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }// when it comes to the situation that the player's option is 'scissors'.
        }
    }

    startGame();
    playMatch();
    compareHands();
};

game();