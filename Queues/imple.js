class node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
};

MyLinkedList.prototype.deleteAtHead = function () {
    if(this.head == null) {
        return;
    } else if(this.head.next == null) {
        this.head = null;
        this.tail = null;
    } else {
        let nextHead = this.head.next;
        this.head.next = null;
        this.head = nextHead;
    }
}

MyLinkedList.prototype.addAtTail = function(val) {
    let n = new node(val);
    if(this.head == null) {
        this.head = n;
        this.tail = n;
    } else {
        this.tail.next = n;
        this.tail = n;
    }
};

MyLinkedList.prototype.getFront = function () {
    return this.head.val;
}

MyLinkedList.prototype.isEmpty = function() {
    return this.head == null && this.tail == null;
}

class Queue {
    constructor() {
        this.q = new MyLinkedList()
    }
    enqueue(val) {
        return this.q.addAtTail(val);
    }
    dequeue() {
        return this.q.deleteAtHead();
    }
    front() {
        return this.q.getFront();
    }
    isEmpty() {
        return this.q.isEmpty();
    }
}

let q = new Queue();
console.log(q.isEmpty());
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.front());
q.dequeue();
console.log(q.front());
console.log(q.isEmpty());