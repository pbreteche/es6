var pictureCollection = new Set();

const picture1 = {src: 'picture-url', alt: 'me and my family'};

pictureCollection.add(picture1);

pictureCollection.add('une chaine de caractere');
pictureCollection.add(123 + 'toto');

if (pictureCollection.has('123toto')) {
    console.log(pictureCollection);
    pictureCollection.delete(picture1);
}
for (const picture of pictureCollection) {
    console.log(picture);    
}

var pictureCollection2 = new WeakSet();

const picture2 = {src: 'picture-url', alt: 'my dog, my cat and me'};

pictureCollection.add(picture1);
pictureCollection.add(picture2);

var myMap = new Map();

var hello = function() { console.log('coucou'); }

myMap.set('option1', 'menu plat dessert');
myMap.set(picture1, 1234);
myMap.set(hello, 'another value');

console.log(myMap.get(hello))

myMap.has(picture1);

for ( const key of myMap.keys()) {
    console.log(myMap.get(key));
}
for ( const value of myMap.values()) {
    console.log(value);
}

for ( const pair of myMap) {
    console.log(pair);
}
myMap.forEach((value, key, map) => console.log(map.get(key) == value));

