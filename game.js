

const playButton = document.getElementById('play-button');
const resultsDisplay = document.getElementById('results-display');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');

// Event listener for Play Game button
playButton.addEventListener('click', function() {
    // Clear previous results
    resultsDisplay.innerHTML = '';
    
  
    let playerName = prompt("Welcome to Bear Ninja Hunter!\n\nPlease enter your name:");
    
    // Check if user clicked Cancel or entered empty name
    if (playerName === null || playerName.trim() === '') {
        playerName = "Player";
        alert("Hello Player! Let's play!");
    } else {
       
        alert("Hello " + playerName + "! Let's play Bear Ninja Hunter!");
    }
    

    let playerChoice = prompt(
        playerName + ", please choose one:\n" +
        "Enter 'Bear', 'Ninja', or 'Hunter'"
    );
    
    // Handle Cancel or empty input
    if (playerChoice === null) {
        resultsDisplay.innerHTML = "<p class='error'>Game cancelled. Refresh page to play again.</p>";
        return;
    }
    
    // Clean and validate input (basic validation)
    playerChoice = playerChoice.trim();
    if (playerChoice === '') {
        resultsDisplay.innerHTML = "<p class='error'>You must enter a choice. Refresh page to play again.</p>";
        return;
    }
    
    // Capitalize first letter for consistency
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    
 
    const computerChoice = "Bear"; 
    
    // Update display with choices
    playerChoiceDisplay.textContent = "Chose: " + playerChoice;
    computerChoiceDisplay.textContent = "Chose: " + computerChoice;
    

    
    // Variable to store game result
    let gameResult = "";
    let resultMessage = "";
    
 
    console.log("=== Using if/else statements ===");
    
    if (playerChoice === computerChoice) {
        // Tie scenario
        gameResult = "Tie";
        resultMessage = "It's a tie! Both chose " + playerChoice + ".";
        console.log("Result: Tie - Both chose " + playerChoice);
    } 
    else if (playerChoice === "Bear") {
        if (computerChoice === "Ninja") {
            gameResult = "Player Wins";
            resultMessage = playerName + " wins! Bear beats Ninja!";
            console.log("Result: Player Wins - Bear beats Ninja");
        } else if (computerChoice === "Hunter") {
            gameResult = "Computer Wins";
            resultMessage = "Computer wins! Hunter beats Bear!";
            console.log("Result: Computer Wins - Hunter beats Bear");
        }
    }
    else if (playerChoice === "Ninja") {
        if (computerChoice === "Hunter") {
            gameResult = "Player Wins";
            resultMessage = playerName + " wins! Ninja beats Hunter!";
            console.log("Result: Player Wins - Ninja beats Hunter");
        } else if (computerChoice === "Bear") {
            gameResult = "Computer Wins";
            resultMessage = "Computer wins! Bear beats Ninja!";
            console.log("Result: Computer Wins - Bear beats Ninja");
        }
    }
    else if (playerChoice === "Hunter") {
        if (computerChoice === "Bear") {
            gameResult = "Player Wins";
            resultMessage = playerName + " wins! Hunter beats Bear!";
            console.log("Result: Player Wins - Hunter beats Bear");
        } else if (computerChoice === "Ninja") {
            gameResult = "Computer Wins";
            resultMessage = "Computer wins! Ninja beats Hunter!";
            console.log("Result: Computer Wins - Ninja beats Hunter");
        }
    }
    else {
        // Invalid choice (though basic validation is done)
        gameResult = "Invalid";
        resultMessage = "Invalid choice. Please enter Bear, Ninja, or Hunter.";
        console.log("Result: Invalid choice - " + playerChoice);
    }
    

    console.log("=== Using switch statement ===");
    
  
    let switchResult = "";
    
    switch(playerChoice) {
        case "Bear":
            switchResult = "You chose Bear. ";
            if (computerChoice === "Bear") {
                switchResult += "Computer also chose Bear - it's a tie!";
            } else if (computerChoice === "Ninja") {
                switchResult += "Computer chose Ninja - Bear beats Ninja!";
            } else if (computerChoice === "Hunter") {
                switchResult += "Computer chose Hunter - Hunter beats Bear!";
            }
            break;
            
        case "Ninja":
            switchResult = "You chose Ninja. ";
            if (computerChoice === "Bear") {
                switchResult += "Computer chose Bear - Bear beats Ninja!";
            } else if (computerChoice === "Ninja") {
                switchResult += "Computer also chose Ninja - it's a tie!";
            } else if (computerChoice === "Hunter") {
                switchResult += "Computer chose Hunter - Ninja beats Hunter!";
            }
            break;
            
        case "Hunter":
            switchResult = "You chose Hunter. ";
            if (computerChoice === "Bear") {
                switchResult += "Computer chose Bear - Hunter beats Bear!";
            } else if (computerChoice === "Ninja") {
                switchResult += "Computer chose Ninja - Ninja beats Hunter!";
            } else if (computerChoice === "Hunter") {
                switchResult += "Computer also chose Hunter - it's a tie!";
            }
            break;
            
        default:
            switchResult = "Invalid choice detected.";
    }
    
    console.log("Switch statement result: " + switchResult);
    
  
    // METHOD 1: Output to HTML page
    let resultsHTML = `
        <div class="result-card ${gameResult.toLowerCase().replace(' ', '-')}">
            <h4>🎮 Game Results</h4>
            <p><strong>Player (${playerName}):</strong> ${playerChoice}</p>
            <p><strong>Computer:</strong> ${computerChoice}</p>
            <div class="winner-box">
                <h3>${gameResult}</h3>
                <p>${resultMessage}</p>
            </div>
            <p class="game-info">Computer is hard-coded to always choose Bear for this assignment.</p>
        </div>
    `;
    
    resultsDisplay.innerHTML = resultsHTML;
    
    
    console.log("=================================");
    console.log("FINAL GAME RESULTS");
    console.log("=================================");
    console.log("Player Name: " + playerName);
    console.log("Player Choice: " + playerChoice);
    console.log("Computer Choice: " + computerChoice);
    console.log("Game Result: " + gameResult);
    console.log("Result Message: " + resultMessage);
    console.log("=================================");
    
    // Update button text
    playButton.textContent = "🔄 Play Again";
});

// Initialize page
console.log("Bear Ninja Hunter Game Loaded");
console.log("Repository: IanA-CA7-JS2-Conditionals");
console.log("Created by: Ian Aspevig");
console.log("=================================");
