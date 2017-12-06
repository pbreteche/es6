'use strict';
import { AccessiblePicture } from './AccessiblePicture.js';
import { GalleryComponent } from './GalleryComponent.js';
import { PictureAddComponent } from './PictureAddComponent.js';





document.addEventListener('DOMContentLoaded', () => {
    const gallerie = new GalleryComponent('.gallery');    
    gallerie.redraw();

    const pictureAdd = new PictureAddComponent('.pictureAddUri', gallerie);
    pictureAdd.redraw();
});

