// Permet d'affecter plusieurs variable simultannément
// en destructurant le membre droit de l'affectation 

var [a, b] = [1, 2];

//intervertir deux variables
[a, b] = [b, a];


/* simplifier la récupération de retour de fonction */
var getContact = function () {
    return { prenom: 'Pierre', tel: ['0123', '5678']};
}
/* example combiné array + object destructuring */
var {tel: [tel1, tel2], prenom} = getContact();


// spread operator
//================

// utilisation d'un tableau comme une suie de valeurs séparées par des virgules

var fruits1 = ['apple', 'banana'];
var fruits2 = ['cherry', 'date'];
var allFruits = [...fruits1, ...fruits2];

var [vert, jaune, rouge, brun] = ['apple', 'banana', ...fruits2];

(function (ingreditent2, ingredient2){

})(...fruits1);

// rest operator
//==============

// ES5
(function (a, b) {
    console.log(a, b, arguments)
})(1, 2, 3, 4);
// 1, 2, [1, 2, 3, 4]

// ES2015
(function (a, b, ...c) {
    console.log(a, b, c);
    //console.log(a, b, c)
})(1, 2, 3, 4);
// 1, 2, [3, 4]

function sum(...operands) {
    return operands.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    })
}

console.log(sum(45, -32, 78, 909, -345));
