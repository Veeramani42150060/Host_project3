const choices=["Rock","Paper","Scissor"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const PlayerscoreDisplay=document.getElementById("PlayerscoreDisplay");
const ComputerscoreDisplay=document.getElementById("ComputerscoreDisplay");
let Playerscore=0;
let Computerscore=0;

function playgame(playerchoice){
    const computerchoice= choices[ Math.floor (Math.random()*3)];
   let result= "";

   if(playerchoice===computerchoice){
     result="ITS A TIE!"
   }
   else{
          switch(playerchoice){
            case "Rock":
                result=(computerchoice==="Scissor") ? "YOU WIN!": "YOU LOSE!";
                break;

                    case "Paper":
                        result=(computerchoice==="Rock") ? "YOU WIN!": "YOU LOSE!";
                        break;

                        case "Scissor":
                            result=(computerchoice==="Paper") ? "YOU WIN!": "YOU LOSE!";
                            break;
    



          }
   }


   playerDisplay.textContent=`Player: ${playerchoice}`;
   computerDisplay.textContent=`Computer: ${computerchoice}`;
   resultDisplay.textContent = result;

   resultDisplay.classList.remove("greentext","redtext");
   switch(result){
    case "YOU WIN!":
      resultDisplay.classList.add("greentext");
      Playerscore++;
      PlayerscoreDisplay.textContent= Playerscore;
      break;

      case "YOU LOSE!":
      resultDisplay.classList.add("redtext");
      Computerscore++;
      ComputerscoreDisplay.textContent=Computerscore;
      break;


   }
   
  }

