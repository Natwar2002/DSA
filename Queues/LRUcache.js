class node {
    constructor(key, value) {
        this.data = key;
        this.value = value;
        this.next = null;
        this.pre = null;
    }
}
class DoublyLinkedList{
    constructor (){
        this.head = null;
        this.tail = null;
    }
    addAtHead (key, value) {
        if(this.head == null) {
            let n = new node(key, value);
            this.head = n;
            this.tail = n;
            return n;
        } else {
            let n = new node(key, value);
            this.head.pre = n;
            n.next = this.head;
            this.head = n;
            return n;
        }
    }
    // addAtTail (key, value) {
    //     if (this.head == null) {
    //         this.addAtHead(val);
    //         return;
    //     } else {
    //         let n = new node (val);
    //         this.tail.next = n;
    //         n.pre = this.tail;
    //         this.tail = n;
    //     }
    // }
    removeAtHead () {
        if(this.head == null) {
            return;
        } else if (this.head.next == null) {
            this.head = null;
            this.tail = null;
        } else {
            let newHead = this.head.next;
            this.head.next = null;
            newHead.pre = null;
            this.head = newHead;
        }
    }
    removeAtTail () {
        if(this.head == null) {
            return;
        } else if (this.head.next == null) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = this.tail.pre;
            this.tail.pre = null;
            newTail.next = null;
            this.tail = newTail;
        }
    }
    removeNode (node) {
        if(node.pre == null) {
            this.removeAtHead();
        } else if (node.next == null) {
            this.removeAtTail();
        } else {
            let preNode = node.pre;
            let nextNode = node.next;
            preNode.next = null;
            node.pre = null;
            node.next = null;
            nextNode.pre = null;
            
            preNode.next = nextNode;
            nextNode.pre = preNode;
        }
    }
    isEmpty () {
        return this.head == null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.mp = {};
        this.dll = new DoublyLinkedList();
    }

    get(key) {
        if(!this.mp[key]) return -1;
        const res = this.mp[key].value;
        this.dll.removeNode(this.mp[key]);
        this.mp[key] = this.dll.addAtHead(key, res);
        return res;
    }

    put(key, value) {
        if(this.mp[key]) {
            this.dll.removeNode(this.mp[key]);
            this.mp[key] = this.dll.addAtHead(key, value);
        } else {
            if(this.size == this.capacity) {
                delete this.mp[this.dll.tail.data];
                this.dll.removeAtTail();
                this.size--;
            }
            this.mp[key] = this.dll.addAtHead(key, value);
            this.size++;
        }
    }
}

let c = new LRUCache(2);
c.put(1, 1);
c.put(2,2);
console.log(c.get(1));
c.put(3,3);
console.log(c.get(2));
c.put(4,4);
console.log(c.get(1));
console.log(c.get(3));
console.log(c.get(4));