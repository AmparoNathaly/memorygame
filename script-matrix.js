/* const selectedImages = getRandomImages(25, 8); */

const memoryImages = [...selectedImages, ...selectedImages];

shuffleArray(memoryImages);

const imagesContainer = document.getElementById('images-container');
memoryImages.forEach(image => {
    const cardElement = document.createElement('div');
    cardElement.className = 'memory-card';
    const imgElement = document.createElement('img');
    imgElement.src = `img/${image}`;
    imgElement.alt = image;
    cardElement.appendChild(imgElement);
    imagesContainer.appendChild(cardElement);

    cardElement.addEventListener('click', () => {
        if (lockBoard) return;
        if (cardElement === firstCard) return; 

        cardElement.classList.add('revealed');

        if (!firstCard) {
            firstCard = cardElement;
        } else {
            secondCard = cardElement;
            lockBoard = true; 

            if (firstCard.querySelector('img').src === secondCard.querySelector('img').src) {
                setTimeout(() => {
                    firstCard.classList.add('matched');
                    secondCard.classList.add('matched');
                    matchedPairs++;
                    resetBoard();
                    if (matchedPairs === selectedImages.length) {
                        window.location.href = 'end.html'; 
                    }
                }, 1000);
            } else {
                setTimeout(() => {
                    firstCard.classList.remove('revealed');
                    secondCard.classList.remove('revealed');
                    resetBoard();
                }, 1000);
            }
        }
    });
});

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

/* console.log(memoryImages); */ 