export class PhotoGallery {
    constructor(containerId, photos) {
        this.container = document.getElementById(containerId);
        this.photos = photos;
        this.render();
    }

    render() {
        this.photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.alt;
            img.className = 'photo';
            this.container.appendChild(img);
        });
    }
}