const myArray = ['a', 'b', 'c'];

for (const elt of myArray) {
    console.log(elt);
}

const myIterator = {
    value: 0,
    next: function() {
        if (this.value > 3) {
            return { done: true };
        }
        return { value: this.value++, done: false };
    }
}
/*
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().done);
*/

// generator function
function* fibo() {
    let a = 1;
    let b = 2;
    while(a < 10000) {
        let c = a + b;
        a = b;
        b = c;
        yield c;
    }
}

// générer un itérateur «à la main»
let myFib = fibo();
console.log(myFib.next().value)
console.log(myFib.next().value)
console.log(myFib.next().value)
console.log(myFib.next().value)

// création d'un objet itérable
let myFib2 = {};
myFib2[Symbol.iterator] = fibo;

for (const f of myFib2) {
    console.log(f);
}
