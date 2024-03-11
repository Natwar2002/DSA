var mapping = function (s) {
    let mp = {};
    for(let i = 0; i < s.length; i++) {
        if(mp[s[i]]) {
            mp[s[i]] += 1;
        } else {
            mp[s[i]] = 1;
        }
    }
    return mp;
}

console.log(mapping("abbccddda"));