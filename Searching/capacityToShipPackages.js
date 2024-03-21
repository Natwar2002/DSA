var shipWithinDays = function(weights, days) {
    let maxWeight = 0, totalWeight = 0;
    for (let i = 0; i < weights.length; i++) {
        totalWeight += weights[i];
        maxWeight = Math.max(maxWeight, weights[i]);
    }

    let lo = maxWeight, hi = totalWeight, ans = lo;

    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if(canShipMidWeightInDays(weights, mid, days)) {
            ans = mid;
            hi = mid - 1;
        } else lo = mid + 1;
    }
    return ans
}

function canShipMidWeightInDays(weights, mid, days) {
    let daysCount = 0, tw = 0;
    for(let i = 0; i < weights.length; i++) {
        if(weights[i] + tw > mid) {
            daysCount++;
            tw = 0;
        }
        tw += weights[i];
    }
    daysCount++;
    return daysCount <= mid;
}