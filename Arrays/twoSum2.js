var twoSum = function (numbers, target) {
    let i = 0;
    let j = numbers.length-1;
    while(i < j){
        if(numbers[i] + numbers[j] === target){
            return [++i, ++j];
        } else if (numbers[j] > target) {
            j--;
        } else {
            i++
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9))