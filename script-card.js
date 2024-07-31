function getRandomImages(totalImages, selectCount) {
    const imageNumbers = Array.from({length: totalImages}, (_, i) => i + 1);
    for (let i = imageNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imageNumbers[i], imageNumbers[j]] = [imageNumbers[j], imageNumbers[i]];
    }
    return imageNumbers.slice(0, selectCount).map(num => `${num}.jpg`);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0; 

