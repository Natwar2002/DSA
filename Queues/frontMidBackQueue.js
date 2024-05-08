var FrontMiddleBack = function () {
    this.q = [];
}

FrontMiddleBack.prototype.pushFront = function (val) {
    this.q.unshift(val);
}

FrontMiddleBack.prototype.pushMiddle = function (val) {
    let mid = Math.floor(this.q.length / 2);
    this.q.splice(mid, 0, val);
}

FrontMiddleBack.prototype.pushBack = function (val) {
    this.q.push(val);
}

FrontMiddleBack.prototype.popFront = function (val) {
    if(this.q.length == 0) return -1;
    return this.q.shift();
}

FrontMiddleBack.prototype.popMiddle = function (val) {
    if(this.q.length == 0) return -1;
    let mid = Math.floor(this.q.length / 2);
    if(this.q.length % 2 == 0) mid--;
    return this.q.splice(mid, 1);
}

FrontMiddleBack.prototype.popBack = function (val) {
    if(this.q.length == 0) return -1;
    return this.q.pop();
}

let q = new FrontMiddleBack();
q.pushFront(1);         // [1]
q.pushBack(2);          // [1, 2]
q.pushMiddle(3);        // [1, 3, 2]
q.pushMiddle(4);        // [1, 4, 3, 2]
console.log(q.popFront());    // return 1 -> [4, 3, 2]
console.log(q.popMiddle());   // return 3 -> [4, 2]
console.log(q.popMiddle());   // return 4 -> [2]
console.log(q.popBack());     // return 2 -> []
console.log(q.popFront());    // return -1 -> [] Empty queue