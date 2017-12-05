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
