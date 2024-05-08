class Stack {
    // Private data member
    #arr;

    constructor() {
        this.#arr = [];
    }

    push(element) {
        this.#arr.push(element);
    }

    pop() {
        return this.#arr.pop();
    }

    top(){
        return this.#arr[this.#arr.length - 1];
    }

    isEmpty(){
        return this.#arr.length == 0; 
    }
}

var MyQueue = function () {
    this.st1 = new Stack();
    this.st2 = new Stack();
}

// Insertion efficient
MyQueue.prototype.push = function(val) {
    this.st1.push(val);
}

// Insertion inefficient
MyQueue.prototype.pop = function() {
    if(this.st1.isEmpty()) return -1;

    while(!this.st1.isEmpty()) {
        let element = this.st1.pop();
        this.st2.push(element);
    }

    const res = st2.pop();

    while(!this.st2.isEmpty()) {
        let element = this.st2.pop();
        this.st1.push(element);
    }

    return res;
} 

MyQueue.prototype.peek = function() {
    return this.st1.top();
}

MyQueue.prototype.isEmpty = function() {
    return this.st1.isEmpty();
}