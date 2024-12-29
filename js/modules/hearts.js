import { ANIMATION_CONFIG } from '../config/animations.js';

export class HeartGenerator {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        
        const duration = Math.random() * 
            (ANIMATION_CONFIG.HEART_DURATION_MAX - ANIMATION_CONFIG.HEART_DURATION_MIN) + 
            ANIMATION_CONFIG.HEART_DURATION_MIN;
        
        heart.style.animationDuration = `${duration}s`;
        this.container.appendChild(heart);

        setTimeout(() => heart.remove(), ANIMATION_CONFIG.HEART_REMOVAL_DELAY);
    }

    start() {
        setInterval(() => this.createHeart(), ANIMATION_CONFIG.HEART_SPAWN_INTERVAL);
    }
}