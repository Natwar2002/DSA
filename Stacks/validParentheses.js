class Stack {
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

    top () {
        return this.#arr[this.#arr.length - 1];
    }

    isEmpty() {
        return this.#arr.length == 0;
    }
}

var validParentheses = function (s) {
    let st = new Stack();
    let i = 0;
    while(i < s.length) {
        let c = s[i];
        if(c === '(' || c === '[' || c === '{') {
            st.push(c);
        } else {
            if(c == ')' && st.top() == '(' || c == ']' && st.top() == '[' || c == '}' && st.top() == '{') {
                st.pop();
            } else {
                st.push(c);
            }
        }
        i++;
    }
    return st.isEmpty();
} 

let s = "()[]{}";
console.log(validParentheses(s));