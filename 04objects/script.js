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

class Component {
    constructor(selector) {
        this.baseElement = document.querySelector(selector);
    }
}

class Template {
    static forEach(strings, arrayValue) {
        return arrayValue.reduce((a, e) => a + strings[0] + e.html + strings[1], '');
    }
}

class GalleryComponent extends Component {
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

class PictureAddComponent extends Component {
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

document.addEventListener('DOMContentLoaded', () => {
    const gallerie = new GalleryComponent('.gallery');    
    gallerie.redraw();

    const pictureAdd = new PictureAddComponent('.pictureAddUri', gallerie);
    pictureAdd.redraw();
});

