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

var removeStars = function (str) {
    let s = new Stack();
    let i = 0;
    while(i < str.length) {
        if(str[i] == "*") {
            if(!s.isEmpty()) {
                s.pop();
            } 
        } else {
            s.push(str[i]);
        }
        i++;
    }

    let res = "";
    while(!s.isEmpty()) {
        let ch = s.top();
        s.pop();
        res = ch + res;
    }
    return res;
}

let s = "leet**cod*e";
console.log(removeStars(s));