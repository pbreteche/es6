'use strict';

class Picture {
    constructor(src) {
        this.src = src;
    }
    
    get html() {
        return `<img src="${this.src}" />`;
    }
}

class AccessiblePicture extends Picture {
    constructor(src, alt = AccessiblePicture.defaultAlt(src)) {
        super(src);
        this.alt = alt;
    }

    get html() {
        return `<img src="${this.src}" alt="${this.alt}" />`;
    }

    static defaultAlt(src) {
        return src.split('/').pop();
    }
}

class GalleryComponent {
    constructor(selector) {
        this.baseElement = document.querySelector(selector);
        this.pictures = [];
    }

    add(picture) {
        if (!picture instanceof Picture) {
            throw new Error('La gallerie n\'accepte que des photos');
        }
    
        this.pictures.push(picture);
    }
    redraw(){
        let htmlOutput = '';
        for (const picture of this.pictures) {
            htmlOutput += picture.html; 
        }
    
        this.baseElement.innerHTML = htmlOutput;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const gallerie = new GalleryComponent('.gallery');
    const inputPicture = document.getElementById('pictureAddUri');

    inputPicture.nextElementSibling.addEventListener('click', () => {
        gallerie.add(new AccessiblePicture(inputPicture.value));
        gallerie.redraw();
    })
});

