class FreqStack {
    freqMap = {};
    max = 0;
    elementMap = {};

    push (val) {
        if (!this.freqMap[val]) {
            this.freqMap[val] = 1;
        } else {
            this.freqMap[val] += 1;
        }

        this.max = Math.max(this.max, this.freqMap[val]);
        let frequency = this.freqMap[val];
        if(!this.elementMap[frequency]) {
            this.elementMap[frequency] = [val];
        } else {
            this.elementMap[frequency].push(val)
        }
    }

    pop () {
        let arr = this.elementMap[this.max];
        let res = arr[arr.length - 1];
        this.elementMap[this.max].pop();
        this.freqMap[res]--;
        if(this.elementMap[this.max].length == 0) {
            delete this.elementMap[this.max];
            this.max -= 1;
        }
        return res;
    }
}

let st = new FreqStack();
st.push(5);
st.push(7);
st.push(5);
st.push(7);
st.push(4);
st.push(5);

console.log(st.elementMap);
console.log(st.freqMap);
console.log(st.max);

console.log(st.pop());
console.log(st.pop());
console.log(st.pop());

console.log(st.elementMap);
console.log(st.freqMap);
console.log(st.max);

console.log(st.pop());
console.log(st.pop());

console.log(st.elementMap);
console.log(st.freqMap);
console.log(st.max);