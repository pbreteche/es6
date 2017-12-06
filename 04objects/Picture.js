export class Picture {
    constructor(src) {
        this.src = src;
    }
    
    get html() {
        return `<img src="${this.src}" />`;
    }
}
