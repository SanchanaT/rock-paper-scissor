const game = () =>{
    let pScore=0;
    let cScore=0;

    //starts the game
    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //play match
    const playMatch = () =>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands= document.querySelectorAll('.hands img');

        hands.forEach( hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation= '';
            })
        })

        //computer options using random number and set them to those 3 images

        const computerOptions  = ['rock','paper','scissors'];
        //random func (0 to 1) mul by 3 = generates numbers from 0 to 2
        options.forEach(option => {
            //foreach click on the buttons, doesnt matter which button the function generates a random response

            option.addEventListener("click", function() {

                const computerNumber= Math.floor(Math.random() * 3);
                const computerChoice= computerOptions[computerNumber];
// compare and update the images after the animation has happened
               setTimeout(()=> {
                    //call comparehands
                compareHands(this.textContent,computerChoice);

                //update images
                playerHand.src= `./assets/${this.textContent}.png`;
                computerHand.src= `./assets/${computerChoice}.png`;
               }, 2000);

                //animation on hands for 2 seconds, since animation is called once ,wont happen again , so remove it after its happens once
                playerHand.style.animation ="shakePlayer 2s ease";
                computerHand.style.animation ="shakeComputer 2s ease";
            });
        });
           
    };

// Update score

    const updateScore= () =>{
        const playerScore= document.querySelector('.player-score p');
        const computerScore= document.querySelector('.computer-score p');
        playerScore.textContent= pScore;
        computerScore.textContent= cScore;
    };

//compare hands and update the winner text
    const compareHands= (playerChoice, computerChoice) =>{
        const winner = document.querySelector(".winner");

        //if its a tie
        if(playerChoice === computerChoice){
            winner.textContent= "It's a Tie";
            return;
        }
        // player has rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent= "Player wins";
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent= "Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
        // player has paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent= "Computer wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent= "Player wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //Player has scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent= "Player wins";
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent= "Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }




    };



    // call all the functions
    startGame();
    playMatch();
};

//start game func
game();