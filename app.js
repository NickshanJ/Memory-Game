const gameBoard = document.getElementById('gameBoard');
const restartBtn = document.getElementById('restartBtn');
const movesCounter = document.getElementById('moves');
const scoreCounter = document.getElementById('score');
const cardsArray = [
    'Deer.png', 'Deer.png', 'Fox.png', 'Fox.png', 
    'Hippo.png', 'Hippo.png', 'Lion.png', 'Lion.png', 
    'Monkey.png', 'Monkey.png', 'Raccoon.png', 'Raccoon.png', 
    'Skunk.png', 'Skunk.png', 'Zebra.png', 'Zebra.png'
];
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let score = 0;
let matchedPairs = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createBoard() {
    gameBoard.innerHTML = '';
    shuffle(cardsArray);
    cardsArray.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.card = card;

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.textContent = '';
        const cardDesign = document.createElement('div');
        cardDesign.style.width = '50%';
        cardDesign.style.height = '50%';
        cardDesign.style.background = '#Ff0000';
        cardDesign.style.borderRadius = '50%';
        cardBack.appendChild(cardDesign);
        cardElement.appendChild(cardBack);

        const cardImgFront = document.createElement('img');
        cardImgFront.src = `images/${card}`;
        cardImgFront.alt = 'Memory card image';
        cardElement.appendChild(cardImgFront);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    moves++;
    movesCounter.textContent = moves;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    if (isMatch) {
        disableCards();
        score += 10;
        scoreCounter.textContent = score;
        matchedPairs++;
        if (matchedPairs === cardsArray.length / 2) {
            setTimeout(showWinningMessage, 500);
        }
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function showWinningMessage() {
    alert(`Congratulations! You've matched all the pairs in ${moves} moves!`);
}

function restartGame() {
    moves = 0;
    score = 0;
    matchedPairs = 0;
    movesCounter.textContent = moves;
    scoreCounter.textContent = score;
    createBoard();
    resetBoard();
}

restartBtn.addEventListener('click', restartGame);

restartGame();