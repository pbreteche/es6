import { Component } from './Component.js';
import { AccessiblePicture } from './AccessiblePicture.js';

export class PictureAddComponent extends Component {
    constructor(selector, gallery) {
        super(selector);
        this.gallery = gallery;
        this.template = 
        `<div>
            <label for="pictureAddUri">URI</label>
            <input type="text" id="pictureAddUri">
            <button>Ajouter</button>
        </div>`
    }

    redraw() {
        this.baseElement.innerHTML = this.template;

        const button = this.baseElement.querySelector('button');
        const input = this.baseElement.querySelector('input');
        
        button.addEventListener('click', () => {
            this.gallery.add(new AccessiblePicture(input.value));
            this.gallery.redraw();
        })
    }
}