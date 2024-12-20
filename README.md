Memory Card Game

Overview

This Memory Card Game is a simple and fun game where players flip over pairs of cards to find matching pairs. 
The game tracks the number of moves and score, providing an engaging way to test memory and concentration.


Setup Instructions:

Prerequisites:

A modern web browser (e.g., Chrome, Firefox, Edge).

A text editor (optional, for code modifications).

Steps to Build the Memory Card Game:

1. Set Up the Basic HTML Structure:

Created an HTML file and added elements to structure the game:
A <div> with id="gameBoard" to serve as the container for the cards.
A <button> with id="restartBtn" for restarting the game.
Two <span> elements with id="moves" and id="score" to display the move count and score.

2. Initialize Variables:

Declared variables for key game elements and logic:
gameBoard, restartBtn, movesCounter, and scoreCounter to reference DOM elements.
cardsArray to store the list of card images.
Variables like hasFlippedCard, lockBoard, firstCard, and secondCard to track game state.
Counters for moves, score, and matchedPairs.

3. Create the Game Board:

Developed the createBoard function to:
Shuffle the cards.
Dynamically generate card elements with a front image and back design.
Add event listeners to handle card flips.

4. Handle Card Flip:

Wrote the flipCard function:
Checked if the board was locked or the same card was clicked.
Flipped the card and updated game logic to track the first and second flipped cards.

5. Match Checking:

Implemented the checkForMatch function to:
Compare the data-card attributes of the flipped cards.
Handle matched cards by disabling clicks or unmatched cards by flipping them back.

6. Reset and Lock Board:

Added the resetBoard function to:
Reset tracking variables after each turn.
Unlock the board after animations complete.

7. Winning Logic:

Created the showWinningMessage function to:
Display a congratulatory message when all pairs are matched.

8. Game Restart Functionality:

Wrote the restartGame function to:
Reset all counters and the board state.
Regenerate the game board.

9. Added Event Listeners:

Attached an event listener to the restart button to call restartGame when clicked.

10. Game Initialization:

Called restartGame to initialize the game when the page loads.

Steps:

Download or clone the repository:

git clone [https://github.com/NickshanJ/Memory-Game.git]

Navigate to the project folder and open the index.html file in your browser.


How to Play:

1.Start the Game:

Open index.html in your web browser.

The game board will display a grid of facedown cards.

2.Flipping Cards:

Click on a card to flip it over.

Try to find the matching pairs by flipping two cards at a time.

3.Matching Pairs:

If the flipped cards match, they will remain face up.

If they do not match, they will flip back over after a short delay.

4.Winning the Game:

The game ends when all pairs are matched.

A message will be displayed showing the number of moves taken.

5.Restart the Game:

Click the "Restart" button to reset the game and play again.

Game Design:

Score and Moves Counter:

The moves counter tracks the number of moves made.

The score counter increases by 10 points for each matched pair.

Responsive Design:

The game is designed to be responsive and works on various screen sizes.

Troubleshooting:

Ensure all files (HTML, CSS, JS, and images) are in the same directory.

If images do not load, check the images folder and verify the file paths in app.js.

For any errors, open the browser console (F12 > Console) to debug.

Credits:

Images: Sourced from [https://www.vecteezy.com/]