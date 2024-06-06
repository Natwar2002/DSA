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
        if(this.head == null) {
            this.head = new Node(key, val);;
        } else {
            let n = new Node(key, val);
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
            this.arr[i] = new MyLinkedList();
        }
    }
 
    hashFunction(key) {
        let p = 101;
        let pow = 1;
        let M = this.maxSize;
        let ans = 0;
        for(let i = 0; i < key.length; i++) {
            let asciiValue = this.ascii(key, i);
            ans = ((ans % M) + ((asciiValue % M) * (pow % M)) % M) % M;
            pow = ((pow % M) * (p % M)) % M;  
        }
        return ans; // BucketIndex;
    }
    
    ascii (key, i) {
        return key.charCodeAt(i);
    }

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
        let newArr = Array(this.maxSize);
        for(let i = 0; i < this.maxSize; i++) {
            newArr[i] = new MyLinkedList();
        }

        const oldArray = this.arr;
        this.curSize = 0;
        for(let i = 0; i < oldArray.length; i++) {
            let temp = oldArray[i].head;
            while(temp != null) {
                let key = temp.key;
                let val = temp.val;

                const bucketIndex = this.hashFunction(key);
                newArr[bucketIndex].addAtHead(key, val);
                temp = temp.next;
                this.curSize += 1;
            }
        }
        this.arr = newArr;
    }

    search(key) {
        let bucketIndex = this.hashFunction(key);
        let temp = this.arr[bucketIndex].head;
        if(temp.key === key) {
            return temp.val;
        }
        
        while(temp != null) {
            if(temp.key === key) {
                return temp.val;
            }
            temp = temp.next;
        }
        return null;
    }

    delete(key) {}

    display() {
        for(let i = 0; i < this.arr.length; i++) {
            let temp = this.arr[i].head;
            let str = 'LL : ';
            while(temp != null) {
                str += `( ${temp.key}, ${temp.val} ) ->`;
                temp = temp.next;
            }
            console.log(str);
        }
        console.log(this.curSize, this.maxSize);
        console.log("*********");
    }
}

const hm = new HashMap();
hm.insert("mango", 10);
hm.display();
hm.insert("banana", 3);
hm.display();
hm.insert("apple", 4);
hm.display();
hm.insert("grapes", 14);
hm.display();