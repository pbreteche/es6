'use strict';

class Picture {
    constructor(src) {
        this._src = src;
    }
    
    get html() {
        return '<img src="' + this.src + '" />';
    }

    set src(src) {
        this._src = src; // récursion infinie avec this.src
    }

    static example() {
        return console.log(this);
    }
}

Picture.example(); // OK
(new Picture('test')).example()// KO

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

document.addEventListener('DOMContentLoaded', function(){
    const gallerie = new GalleryComponent('.gallery');
    const inputPicture = document.getElementById('pictureAddUri');

    inputPicture.nextElementSibling.addEventListener('click', function(){
        gallerie.add(new Picture(inputPicture.value));
        gallerie.redraw();
    })
});

