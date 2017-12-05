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

