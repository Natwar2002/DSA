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

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.top()); 
s.pop(); // removes 30
console.log(s.top());
console.log(s.top());
console.log(s.isEmpty());