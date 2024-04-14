class Stack {
    // private properties
    #arr;

    constructor() {
        this.#arr = [];
    }

    push(element) {
        this.#arr.push(element);
    }

    pop() {
        this.#arr.pop();
    }

    top() {
        return this.#arr[this.#arr.length - 1]; // element present at the last index is the top most element
    }

    isEmpty() {
        return this.#arr.length == 0;
    }
}

let s = new Stack();
console.log(s.isEmpty());