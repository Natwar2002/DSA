// var reverseWords = function(s) {
//     s = s.split(' ');
//     let reversedString = "";
//     for(let i = s.length-1; i >= 0; i--){
//         if(s[i] !== ''){
//             reversedString += s[i] + " ";
//         }
//     }
//     return reversedString.trim();
// };

// console.log(reverseWords('Hello     World'));

var reverseWords = function(s) {
    s = s.split(' ');
    let result = [];
    for(let i = s.length-1; i >= 0; i--){
        if(s[i] !== ''){
            result.push(s[i]);
        }
    }
    return result.join(' ');
};

console.log(reverseWords('Hello     World'));