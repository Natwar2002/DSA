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

MyLinkedList.prototype.getBack = function () {
    return this.tail.val;
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
    rear() {
        return this.q.getBack();
    }
    isEmpty() {
        return this.q.isEmpty();
    }
}

function average(level) {
    let i = 0, sum = 0, count = 0;
    while(i < level.length) {
        sum += level[i];
        count++;
        i++;
    }
    return sum/count;
}

function averageOfLevels(root) {
    const q = new Queue();
    q.enqueue(root);
    q.enqueue(null);
    const res = [];
    let level = [];
    let avg = 0;

    while(!q.isEmpty()) {
        let cur = q.front();
        q.dequeue();
        if(cur == null) {
            if(!q.isEmpty()) {
                avg = average(level);
                res.push(avg);
                q.enqueue(null);
                level = [];
            } else {
                avg = average(level);
                res.push(avg);
            }
        } else {
            level.push(cur.val);
            if(cur.left) level.push(cur.left);
            if(cur.right) level.push(cur.right);
        }
    }
    return res;
}