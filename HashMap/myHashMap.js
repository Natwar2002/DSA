class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
    }
    addAtHead(key, val) {
        let n = new Node(key, val);
        if(this.head == null) {
            this.head = n;
        } else {
            n.next = this.head;
            this.head = n;
        }
    }
}

class HashMap {
    constructor() {
        this.maxSize = 2;
        this.curSize = 0;
        this.lambdaFactorThreshold = 0.5;
        this.arr = Array(this.maxSize);

        for(let i = 0; i < this.maxSize; i++) {
            arr[i] = new MyLinkedList();
        }
    }

    /**
     * @param {String} key 
     * @returns {Number} bucketIndex
     */ 
    hashFunction(key) {
        let p = 101;
        let pow = 1;
        let C = this.curSize;
        let ans = 0;
        for(let i = 0; i < key.length; i++) {
            let asciiValue = ascii(key[i], i);
            ans = ((ans % C) + ((asciiValue % C) * (pow % C)) % C) % C;
            pow = (pow % C) * (p % C);  
        }
        return ans; // BucketIndex;
    }
    /**
     * 
     * @param {String} key 
     * @param {Number} i 
     * @returns {Number}
     */
    ascii (key, i) {
        return key.charCodeAt(i);
    }

    /**
     * @param {String} key 
     * @param {Number} val
     */
    insert (key, val) {
        let newLambdaFactor = (this.curSize + 1)/this.maxSize;
        if(newLambdaFactor >= this.lambdaFactorThreshold) {
            this.rehash();
        }

        const bucketIndex = this.hashFunction(key);
        this.arr[bucketIndex].addAtHead(key, val);
        this.curSize += 1;
    }

    rehash() {
        this.maxSize *= 2;
    }

    search(key) {}
    delete(key) {}
}