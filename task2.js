// function reverseInParentheses(word) {
//    if (word.includes('(')) {
//        return reverseInParentheses(reverse(word));
//    }
//        return word;
   
// }

// function reverse(params) {
//     const regexp = /\(([^()]*)\)/i;
//     const subStr = regexp.exec(s)[1];
//     console.log(subStr)
//     subStr = subStr.split('').reverse().join('');
//     console.log(subStr)
//     return s.replace(regexp, subStr)
// }



function reverseInParentheses(words) {
    while (true) {
        let c = words.indexOf(")");  
        if (c === -1) 
            {break;}
        let o = words.substring(0, c).lastIndexOf("(");
        let start = words.substring(0, o);
        // reverse
        let middle = words.substring(o + 1, c).split("").reverse().join("");
        let end = words.substring(c + 1, s.length);
        words = start + middle + end;
    }
    return words;
}

 const ans = reverseInParentheses("foo(bar)blim")
 console.log(ans)




