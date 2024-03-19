var successfulPairs = function(spells, potions, success) {
    let arr = [];
    for (let i = 0; i < potions.length; i++) {
        arr.push(Math.ceil(success/potions[i]));
    }
    
    arr.sort((a,b) => a - b);
    const n = arr.length;
    
    const pairs = [];
    for (let spell in spells) {
        let lo = 0, hi = n - 1, val = 0; 
        while(lo <= hi) {
            let mid = Math.floor((lo + hi)/2);
            if (arr[mid] <= spell) {
                lo = mid + 1;
                val = lo;
            } else {
                hi = mid - 1;
            }
        }
        pairs.push(val);
    }

    return pairs;
};