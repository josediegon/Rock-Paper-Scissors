/*Paso 1: Lógica para obtener la elección de la computadora */
function getComputerChoice(){

    const randomNum=Math.random();

    if(randomNum<0.33){
        return "piedra";
    } else if (randomNum<0.66){
        return "papel";
    } else{
        return "tijeras";
    }
}
/*Paso 2: Lógica para obtener la elección humana */
function getHumanChoice(){
    let promptUser = prompt("Elija entre Piedra, Papel o Tijeras");
    promptUser= promptUser.toLowerCase();

    if (promptUser==="piedra" || promptUser==="papel" || promptUser==="tijeras"){
        return promptUser;
    } else{
        console.log("Elección no válida. Por favor elige entre piedra, papel o tijeras.");
        return getComputerChoice();
    }
}
 /*Paso 3: Declarar las variables de puntuación de los jugadores */
let humanScore = 0;
let computerScore = 0;
/*Paso 4: Lógica para jugar una sola ronda */
function playRound (humanChoice, computerChoice){
    
    if(humanChoice==computerChoice){
        return console.log("Es un empate");
    }

    if (
        (humanChoice == "piedra" && computerChoice == "tijeras") ||
        (humanChoice == "papel" && computerChoice == "piedra") ||
        (humanChoice == "tijeras" && computerChoice == "papel")
    ){
        humanScore++;
        return console.log(`¡Ganas el human! ${humanChoice} vence a ${computerChoice}.`);
    } else{
        computerScore++;
        return console.log(`Gana la PC! ${computerChoice} vence a ${humanChoice}.`);
        
    }

}
/*Paso 5: Lógica para jugar todo el juego */
function playGame(){
    humanScore = 0; /*Reinicia las puntuaciones */
    computerScore = 0;

    for(i=1;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore>computerScore){
        console.log(`Ganaste el juego con ${humanScore} puntos frente a ${computerScore} puntos.`);
    } else if (computerScore>humanScore){
        console.log(`Ganaste el juego con ${computerScore} puntos frente a ${humanScore} puntos.`);
    } else{
        console.log(`El juego terminó en empate con ${humanScore} puntos para ambos.`);
    }
}

/*Inicia el juego al cargar la página*/
playGame();


