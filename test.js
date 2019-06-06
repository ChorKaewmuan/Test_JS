function wordsWithSameCharSet(word) {
    let hash = {};
    for ([index, word] of word.entries()) {
        let w = word.split("").sort().join("");
        hash[w] = !hash[w] ? [word] : hash[w].concat(word);
    }
    let filteredObject = Object.keys(hash).reduce(function(r, e) {
        if (Object.values(hash).filter(v => v.length > 1).includes(hash[e])) r[e] = hash[e]
        return r;
    }, {});

    return filteredObject
}

const words = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'];

console.log(wordsWithSameCharSet(words))
