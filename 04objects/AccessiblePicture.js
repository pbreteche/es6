import { Picture } from './Picture.js'

export class AccessiblePicture extends Picture {
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