// Výběr prvků DOM
const playerScoreElement = document.getElementById('player-score'); // přípojí k prvku událost
const computerScoreElement = document.getElementById('computer-score');
const resultTextElement = document.getElementById('result-text');
const choices = document.querySelectorAll('button'); // Vrátí prvky, které odpovídají css

// Počáteční skóre
let playerScore = 0;
let computerScore = 0;

// Funkce pro generaci volby počítače
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// Funkce pro určení vítěze
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Funkce pro aktualizaci skóre
function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

// Přeložení volby počítače
const translations = {
    rock: 'kámen',
    paper: 'papír',
    scissors: 'nůžky'
};

// Funkce na přeložení
function translateChoice(choice) {
    return translations[choice] || choice;
}

// Funkce pro zpracování volby hráče a zobrazení výsledku hry
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const translatedComputerChoice = translateChoice(computerChoice);
    const winner = getWinner(playerChoice, computerChoice);
    updateScore(winner);
    resultTextElement.textContent = `${winner === 'draw' ? 'Remíza' : winner === 'player' ? 'Vyhrál jsi' : 'Prohrál jsi'} (Počítač zvolil ${translatedComputerChoice})`;

    if (winner === 'computer') {
        resultTextElement.style.color = 'red';
    } else if (winner === 'player') {
        resultTextElement.style.color = 'green';
    } else {
        resultTextElement.style.color = 'white';
    }
}


// Přidání event listenerů k tlačítku
choices.forEach(choice => {
    choice.addEventListener('click', () => { // přídá k prvku událost
        playRound(choice.id);
    });
});
