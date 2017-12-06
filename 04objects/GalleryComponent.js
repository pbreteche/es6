
import { Component } from './Component.js';
import { Template } from './Template.js';
import { Picture } from './Picture.js';

export class GalleryComponent extends Component {
    constructor(selector) {
        super(selector);
        this.pictures = [];
    }

    add(picture) {
        if (!picture instanceof Picture) {
            throw new Error('La gallerie n\'accepte que des photos');
        }
    
        this.pictures.push(picture);
    }
    redraw(){
        this.baseElement.innerHTML = `
<ul>
    ${Template.forEach`<li>${this.pictures}<button>X</button></li>`}
</ul>`;

        const deleteButtons = document.querySelectorAll('.gallery button');
        let i = 0;
        for (const btn of deleteButtons) {
            btn.addEventListener('click', ((id)=> {
                return (e) => {
                    this.pictures.splice(id, 1);
                    this.redraw()
                };
            })(i));
            i++;
        } 
    }
}