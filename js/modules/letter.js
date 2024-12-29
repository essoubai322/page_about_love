import { ANIMATION_CONFIG } from '../config/animations.js';

export class LoveLetter {
    constructor(buttonId, letterId) {
        this.button = document.getElementById(buttonId);
        this.letter = document.getElementById(letterId);
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.button.addEventListener('click', () => this.revealLetter());
    }

    revealLetter() {
        this.letter.classList.remove('hidden');
        setTimeout(() => {
            this.letter.classList.add('show');
        }, ANIMATION_CONFIG.LETTER_REVEAL_DELAY);
    }
}