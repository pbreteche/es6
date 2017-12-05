'use strict';

document.addEventListener('DOMContentLoaded', function() {
    var panel = document.querySelector('.panel');
    var panelIsOpen = false;
    document.querySelector('.toolbar button').addEventListener('click', function(){
        if (panelIsOpen) {
            panel.classList.add('closed');
            panelIsOpen = false;
        }
        else {
            panel.classList.remove('closed');
            panelIsOpen = true;
        }
    });
});
