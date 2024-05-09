var firstUniqueChar = function (s) {
    let mp = {};
    let i = 0;
    while (i < s.length) {
        if (!mp[s[i]]) {
            mp[s[i]] = 1;
        } else {
            mp[s[i]] += 1;
        }
        i++;
    }
    
    let j = 0
    while(j < s.length) {
        if(map[s[i]] == 1) {
            return i;
        }
        j++;
    }
    return -1;
}