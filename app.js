let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice =()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock,paper,scissors
};

//Draw game
const drawGame = ()=>{
    msg.innerText="Game was Draw.Play again.";
    msg.style.backgroundcolor="#081b31";
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText=`you win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundcolor="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText=`You lose. ${compChoice}  beats ${userChoice}`;
        msg.style.backgroundcolor="red";
    }
};

const playGame = (userChoice) =>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        //Draw game
        drawGame();
    } else {
         let userWin=true;
         if(userChoice=== "rock"){
           userWin= compChoice === "paper" ? false : true;
         } else if(userChoice === "paper"){
            userWin= compChoice === "scissors" ? false: true;
         } else {
            //rock,paper
            userWin= compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});