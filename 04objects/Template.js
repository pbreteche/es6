export class Template {
    static forEach(strings, arrayValue) {
        return arrayValue.reduce((a, e) => a + strings[0] + e.html + strings[1], '');
    }
}