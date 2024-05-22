class node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addAtTail(val) {
        if(this.head == null) {
            const n = new node(val);
            this.head = n;
            this.tail = n; 
            return;
        } else {
            const n = new node(val);
            this.tail.next = n;
            this.tail = n;
        }
    }
    removeAtHead() {
        if(this.head == null) {
            return;
        } else if(this.head.next == null) {
            this.head = null;
            this.tail = null;
        } else {
            const newHead = this.head.next;
            this.head.next = null;
            this.head = newHead;
        }
    }
    isEmpty() {
        return this.head == null;
    }
    getFront() {
        if(!this.head) return undefined;
        return this.head.val;
    }
    getRear() {
        if(!this.tail) return undefined;
        return this.tail.val;
    }
}

class CustomQueue {
    constructor() {
        this.ll = new MyLinkedList(); 
    }
    enqueue(val) {
        this.ll.addAtTail(val);
    }
    dequeue() {
        this.ll.removeAtHead();
    }
    front() {
        return this.ll.getFront();
    }
    read() {
        return this.ll.getRear();
    }
    isEmpty(){
        return this.ll.isEmpty();
    }
}

var findBottomLeftValue = function(root) {
    if(!root) return [];
    const q = new CustomQueue();
    q.enqueue(root);
    q.enqueue(null);
    let res;
    let level = new Array();
    while(!q.isEmpty()) {
        let cur = q.front();
        q.dequeue();
        if(cur == null) {
            if(!q.isEmpty()) {
                level = new Array();
                q.enqueue(null);
            } else {
                res = level[0];
            }
        } else {
            level.push(cur.val);
            if(cur.left) q.enqueue(cur.left);
            if(cur.right) q.enqueue(cur.right);
        }
    }
    return res;
};