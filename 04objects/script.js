'use strict';

class Picture {
    constructor(src) {
        this.src = src;
    }
    
    toHTML() {
        return '<img src="' + this.src + '" />';
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
            htmlOutput += picture.toHTML(); 
        }
    
        this.baseElement.innerHTML = htmlOutput;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const gallerie = new GalleryComponent('.gallery');
    const inputPicture = document.getElementById('pictureAddUri');

    inputPicture.nextElementSibling.addEventListener('click', function(){
        gallerie.add(new Picture(inputPicture.value));
        gallerie.redraw();
    })
});

