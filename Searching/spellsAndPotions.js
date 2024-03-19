var successfulPairs = function(spells, potions, success) {
    potions.sort((a,b) => a - b);
    const n = potions.length;
    
    const pairs = [];
    for (let spell in spells) {
        let lo = 0, hi = n - 1; 
        while(lo <= hi) {
            let mid = Math.floor((lo + hi)/2);
            if (arr[mid] * spell < success) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        pairs.push(n - lo);
    }

    return pairs;
};

let spells = [3,1,2], potions = [8,5,8], success = 16;
console.log(successfulPairs(spells, potions, success));