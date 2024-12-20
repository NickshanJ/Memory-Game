document.addEventListener("DOMContentLoaded", () => {
    const cardImages = [
      "images/Deer.png",
      "images/Deer.png",
      "images/Fox.png",
      "images/Fox.png",
      "images/Hippo.png",
      "images/Hippo.png",
      "images/Lion.png",
      "images/Lion.png",
      "images/Monkey.png",
      "images/Monkey.png",
      "images/Raccoon.png",
      "images/Raccoon.png",
      "images/Skunk.png",
      "images/Skunk.png",
      "images/Zebra.png",
      "images/Zebra.png",
    ];
  
    const gameBoard = document.getElementById("game-board");
    const movesDisplay = document.getElementById("moves");
    const pointsDisplay = document.getElementById("points");
    const restartButton = document.getElementById("restart-button");
    let moves = 0;
    let points = 0;
    let cards = [];
    let firstCard, secondCard;
    let lockBoard = false;
  
    function createBoard() {
      cardImages.sort(() => 0.5 - Math.random());
  
      cardImages.forEach((image) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.image = image;
  
        const cardImage = document.createElement("img");
        cardImage.src = image;
        card.appendChild(cardImage);
  
        card.addEventListener("click", flipCard);
  
        gameBoard.appendChild(card);
        cards.push(card);
      });
    }
  
    function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
  
      this.classList.add("flipped");
  
      if (!firstCard) {
        firstCard = this;
        return;
      }
  
      secondCard = this;
      lockBoard = true;
  
      checkForMatch();
    }
  
    function checkForMatch() {
      let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  
      isMatch ? disableCards() : unflipCards();
      updateScore();
      checkWin();
    }
  
    function disableCards() {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
  
      points++;
      resetBoard();
    }
  
    function unflipCards() {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
  
        resetBoard();
      }, 1000);
    }
  
    function resetBoard() {
      [firstCard, secondCard] = [null, null];
      lockBoard = false;
    }
  
    function updateScore() {
      moves++;
      movesDisplay.textContent = moves;
      pointsDisplay.textContent = points;
    }
  
    function checkWin() {
      if (points === cardImages.length / 2) {
        setTimeout(() => {
          alert(`Congratulations! You won the game in ${moves} moves!`);
        }, 500); // Delay to allow the last card flip animation to complete
      }
    }
  
    function restartGame() {
      moves = 0;
      points = 0;
      movesDisplay.textContent = moves;
      pointsDisplay.textContent = points;
      gameBoard.innerHTML = "";
      cards = [];
      firstCard = secondCard = null;
      lockBoard = false;
      createBoard();
    }
  
    restartButton.addEventListener("click", restartGame);
  
    createBoard();
  });
  