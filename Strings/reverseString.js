var revString = function (s){
    let i = 0;
    let j = s.length-1;
    while(i < j){
        var t = s[i];
        s[i] = s[j];
        s[j] = t;
        i++;
        j--;
    }
    return s
}

console.log(revString(['H', 'e', 'l', 'l', 'o']));