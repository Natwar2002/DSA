var guess = function (mid) {
    let number = 10;
    if (mid > number) {
        return -1;
    } else if (mid < number) {
        return 1;
    } else if (mid == number) {
        return 0;
    }
}

var guessNumber = function (n) {
    let lo = 1;
    let hi = n;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (guess(mid) == -1) {
            hi = mid - 1;
        } else if (guess(mid) == 1) {
            lo = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

let n = 20;
console.log(guessNumber(20));