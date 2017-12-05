'use strict';

var fn1 = function(parameter) {
    // instructions

    return //expressions;
}

var fn2 = (parameter) => {
    // instructions

    return //expressions;
}

var double = x => x * 2;

var hello = () => console.log(1)

var fibonnacci = (a, b = a+1) => (a+(b))

var contact = (lastname, firstname) => { 
    return {lastname: lastname, firstname: firstname }
}

var contact2 = (lastname, firstname) => ({lastname: lastname, firstname: firstname })
