var squareRoot = function (x) {
    if (x === 1 || x === 0) return x;
    let lo = 1, hi = x;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo)/2);
        if(mid*mid === x) {
            return mid;
        } else if (mid*mid > x) hi = mid - 1;
        else lo = mid + 1;
    }
    console.log(Math.round(hi));
    return Math.round(hi);
}

let x = 23;
console.log(squareRoot(x));