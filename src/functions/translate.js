export const translatesJson = require('../../data/translates/translates.json')
// console.log(translatesJson)

export function translate(lang, label, def) {
    try {
        if(lang === undefined) throw new Error("translate(lang, label, def) -> la variabile lang non è definita");
        if(label === undefined) throw new Error("translate(lang, label, def) -> la variabile label non è definita");
        if(def === undefined) throw new Error("translate(lang, label, def) -> la variabile def non è definita");
    } catch(err) {
        throw err
    }
    
    var search = translatesJson
        .filter(l => l.lang===lang)
        .map(s => s.strings)[0]
        .filter(v => v.label===label)

    if (search.length) return search[0].value

    return def
} 