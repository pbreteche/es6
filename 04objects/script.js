'use strict';

var Picture = function(src) {
    this.src = src;
}

Picture.prototype.toHTML = function() {
    return '<img src="' + this.src + '" />';
}

var GalleryComponent = function(selector) {
    this.baseElement = document.querySelector(selector);
    this.pictures = [];
}

GalleryComponent.prototype.add = function(picture) {
    if (!picture instanceof Picture) {
        throw new Error('La gallerie n\'accepte que des photos');
    }

    this.pictures.push(picture);
}

GalleryComponent.prototype.redraw = function(){
    let htmlOutput = '';
/*
    for (let i=0; i < this.pictures.length; i++ ) {
        
    }
    this.pictures.forEach(function(elem, index) {
        var localVar = '...'; // portée d'une variable = la fonction
        //htmlOutput += elem.toHTML(); // variable output accédée depuis le «scope» parent
    });
*/
    // variable de bloc déclarée avec «let»
    // marche aussi avec «const» (ne peut être réaffectée)
    for (const picture of this.pictures) {
        htmlOutput += picture.toHTML(); 
    }
    console.debug('redraw', this);

    this.baseElement.innerHTML = htmlOutput;
}

document.addEventListener('DOMContentLoaded', function(){
    const gallerie = new GalleryComponent('.gallery');
    const inputPicture = document.getElementById('pictureAddUri');

    inputPicture.nextElementSibling.addEventListener('click', function(){
        gallerie.add(new Picture(inputPicture.value));
        gallerie.redraw();
    })
});

