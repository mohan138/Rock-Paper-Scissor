var playerScore = 0, botScore = 0

var numberOfRounds = prompt("Number of rounds")

function number() {
return Math.floor(Math.random() *(3)+1)
}


while(true){
    
    var randomNumber = number()
    if(randomNumber == 1)
    botSelection = "rock"
    else if(randomNumber == 2)
    botSelection = "paper"
    else if(randomNumber == 3)
    botSelection = "scissor"

    playerSelection = prompt("Enter rock or paper or scissor")
    playerSelection = playerSelection.toLowerCase()
   

    pointAllocation(playerSelection, botSelection)

    console.log("player selection = ", playerSelection, "bot selection = ",botSelection)
    console.log("player =", playerScore, "bot =", botScore)

    if(botScore == numberOfRounds){
        console.log("bot wins");
        break;
    }
    else if(playerScore == numberOfRounds){
        console.log("player wins");
        break;
    }
}

function pointAllocation(playerSelection, botSelection){
    if(playerSelection=="rock"){
        if(botSelection =="paper"){
            botScore++
        }
        else if(botSelection == "scissor"){
            playerScore++
        }
    }
    if(playerSelection == "paper"){
        if(botSelection =="scissor"){
            botScore++
        }
        else if(botSelection == "rock"){
            playerScore++
        }
    }
    if(playerSelection == "scissor"){
        if(botSelection =="rock"){
            botScore++
        }
        else if(botSelection == "paper"){
            playerScore++
        }
    }
}


