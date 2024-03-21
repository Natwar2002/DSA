var shipWithinDays = function(weights, days) {
    let maxWeight = -1, totalWeight = 0;
    for (let i = 0; i < weights.length; i++) {
        totalWeight += weights[i];
        maxWeight = Math.max(maxWeight, weights[i]);
    }

    let lo = maxWeight, hi = totalWeight, ans = hi;

    while(lo <= hi) {
        let mid = Math.floor((lo + hi)/2);
        if(canShipMidWeightInDays(weights, mid, days)) {
            ans = mid;
            hi = mid - 1;
        } else lo = mid + 1;
    }
    return ans;
}

function canShipMidWeightInDays(weights, mid, days) {
    let daysCount = 0, tw = 0;
    for(let i = 0; i < weights.length; i++) {
        if(tw + weights[i] > mid) {
            daysCount++;
            tw = 0;
        }
        tw += weights[i];
    }
    daysCount++;
    return daysCount <= days;
}

let weights = [1,2,3,4,5,6,7,8,9,10], days = 5;
console.log(shipWithinDays(weights, days));