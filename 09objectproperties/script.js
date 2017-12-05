let i = 1;
let obj = {
    foo: 'bar',
    fooz: function () {},
    ['foo' + i]: 'barfoo'
}

obj['foo' + ++i] = i++;

console.log(obj);
