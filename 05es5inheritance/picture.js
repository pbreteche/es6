/* Héritage ES5 */
var AnotherPicture = function(src) {
    Picture.call(this, src);
}

AnotherPicture.prototype = Object.create(Picture.prototype);
AnotherPicture.prototype.constructor = AnotherPicture;