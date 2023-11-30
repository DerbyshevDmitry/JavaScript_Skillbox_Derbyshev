document.addEventListener('DOMContentLoaded', () => {
    const cards = ['1', '2', '3', '4', '5', '6', '7', '8', '1', '2', '3', '4', '5', '6', '7', '8'];
    let openedCards = [];
    let matchedCards = [];
  
    const cardsGrid = document.querySelector('.cards-grid');
    const resetButton = document.getElementById('reset-button');
  
    const shuffle = (array) => {
      let currentIndex = array.length;
      let temporaryValue, randomIndex;
  
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
  
      return array;
    };
  
    const createCards = () => {
      const shuffledCards = shuffle(cards);
  
      shuffledCards.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.value = card;
        cardsGrid.appendChild(cardElement);
  
        cardElement.addEventListener('click', () => {
          if (
            !cardElement.classList.contains('open') &&
            !cardElement.classList.contains('match') &&
            openedCards.length < 2
          ) {
            cardElement.classList.add('open');
            cardElement.textContent = card; 
            openedCards.push(card);
  
            if (openedCards.length === 2) {
              checkForMatch();
            }
          }
        });
      });
    };
  
    const checkForMatch = () => {
      const [firstCard, secondCard] = openedCards;
      const allCards = document.querySelectorAll('.card');
  
      if (firstCard === secondCard) {
        allCards.forEach((card) => {
          if (card.dataset.value === firstCard) {
            card.classList.add('match');
            matchedCards.push(card);
          }
        });
      } else {
        setTimeout(() => {
          allCards.forEach((card) => {
            if (!card.classList.contains('match')) {
              card.classList.remove('open');
              card.textContent = ''; 
            }
          });
        }, 1000);
      }
  
      openedCards = [];
  
      if (matchedCards.length === cards.length) {
        setTimeout(() => {
          alert('Поздравляем, вы выиграли!');
        }, 500);
      }
    };
  
    const resetGame = () => {
      cardsGrid.innerHTML = '';
      openedCards = [];
      matchedCards = [];
      createCards();
    };
  
    resetButton.addEventListener('click', resetGame);
  
    createCards();
  });
  