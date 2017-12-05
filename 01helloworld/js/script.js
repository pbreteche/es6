'use strict';

console.log('salut');

// context global implicite
// pas la peine d'écrire window
// => alert('coucou')
window.alert('coucou');

// declaration hoisting
// hissage des déclarations
function alert(arg) { 
    console.log(arg);
}

console.log(annee) // undefined

var annee = 12 + '\' ans';
var annee = 12 + "\" ans";

console.log(annee)

var contenuHtml = '<p class="coucou"> test </p>';
var phrase = "le javascript c'est bien";

//anee = 34; // ReferenceError en mode strict

// type primitifs
// number = java double
// string
// boolean: true, false
// null: null
// undefined

// type object
// exemple String, Array,

function afficherEnConsole() {
    console.log('effectivement')
}

document.querySelector('.celui-qui-marche')
    .addEventListener('click', afficherEnConsole);
