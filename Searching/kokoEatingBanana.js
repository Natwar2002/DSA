var minEatingSpeed = function (piles, h) {
    let lo = 1, hi = Math.max(...piles), ans = 1;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (canEatWithKspeed(piles, mid, h)) {
            ans = mid;
            hi = mid - 1;
        } else lo = mid + 1;
    }
    return ans;
};

var canEatWithKspeed = function (piles, mid, h) {
    let speedPerHour = 0;
    for (let i = 0; i < piles.length; i++) {
        speedPerHour += Math.ceil(piles[i] / mid);
    }
    return speedPerHour <= h;
};


let  piles = [30,11,23,4,20], h = 5;
console.log(minEatingSpeed(piles, h));