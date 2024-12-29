// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    document.querySelector('.hearts-container').appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Generate hearts periodically
setInterval(createHeart, 300);

// Handle love letter reveal
const letterBtn = document.querySelector('.love-letter-btn');
const letter = document.querySelector('.love-letter');

letterBtn.addEventListener('click', () => {
    letter.classList.remove('hidden');
    setTimeout(() => {
        letter.classList.add('show');
    }, 50);
});