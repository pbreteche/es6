'use strict';

fn1();
fn2();

function fn1() { }

var fn2 = function() {};

fn3();
fn4();

var fn4 = function fn3(){};

var monChat = { nom: 'Felix' };
monChat.miauler = function(){};

monChat.miauler();

monChat.dormir = new Function('instructions dans une chaine de caractères');

// fonction constructeur
var Chat = function(nom) {
    this.nom = nom;
}

var tom = new Chat('Tom');

