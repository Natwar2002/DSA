var takeCharacters = function(s, k) {
    let countA = 0, countB = 0, countC = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] == 'a') countA++;
        if(s[i] == 'b') countB++;
        if(s[i] == 'c') countC++;
    }
    console.log(countA, countB, countC);

    if (countA < k || countB < k || countC < k) return -1;

    let max = 0, j = 0;
    let extraA = countA - k, extraB = countB - k, extraC = countC - k;
    
    for (let i = 0; i < s.length; i++) {
        if(s[i] == 'a') extraA--;
        if(s[i] == 'b') extraB--;
        if(s[i] == 'c') extraC--;

        while (extraA < 0 || extraB < 0 || extraC < 0) {
            if(s[j] == 'a') extraA++;
            if(s[j] == 'b') extraB++;
            if(s[j] == 'c') extraC++;

            j++;
        }
        max = Math.max(max, i-j+1);
        console.log(i, j, max);
    }

    return s.length - max;
};

let s = "aabaaaacaabc", k = 2;
console.log(takeCharacters(s, k));