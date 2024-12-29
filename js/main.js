import { HeartGenerator } from './modules/hearts.js';
import { LoveLetter } from './modules/letter.js';
import { PhotoGallery } from './modules/photos.js';
import { memories } from './data/memories.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize hearts
    const heartGenerator = new HeartGenerator('hearts-container');
    heartGenerator.start();

    // Initialize photo gallery
    new PhotoGallery('photos-container', memories);

    // Initialize love letter
    new LoveLetter('letter-btn', 'love-letter');
});