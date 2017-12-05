'use strict';

var unTrucEnLatin = 'SPQR'

var docHtml = 
'<p>' +
'    lorem' + unTrucEnLatin + ' ipsum' +
'</p>';

var docHtml2 =
`<p>
    lorem ${unTrucEnLatin} ipsum
</p>`;


var docHtml3 =
`<p>
    lorem ${unTrucEnLatin + `<i>${docHtml2}</i>`.length} ipsum
</p>`;

console.error(docHtml3)

var docHtml4 =
latinToFrancais`<p>
    lorem ${unTrucEnLatin + grosDoc`<i>${docHtml2}</i>`.length} ipsum
</p>`;
console.info(docHtml4)

function latinToFrancais(fragments, trucLatin) {
    if (trucLatin == 'SPQR65') {
        trucLatin = 'RF42';
    }
    return fragments[0] + trucLatin + fragments[1]
}

function grosDoc(fragments, doc2) {
    doc2 += doc2
    return fragments[0] + doc2 + fragments[1]
}