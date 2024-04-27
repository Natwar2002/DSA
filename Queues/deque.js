class node {
    constructor(val){
        this.val = val;
        this.pre = null;
        this.next = null;
    }
}

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
};

MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head == null) {
        let n = new node(val);
        this.head = n;
        this.tail = n;
    } else {
        let n = new node(val);
        n.next = this.head;
        this.head.pre = n;
        this.head = n;
    }
};

MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null) {
        this.addAtHead(val);
        return;
    } else {
        let n = new node(val);
        this.tail.next = n;
        n.pre = this.tail;
        this.tail = n;
    }
};

MyLinkedList.prototype.deleteAtHead = function () {
    if(this.head == null) {
        return;
    } else if (this.head.next == null) {
        this.head = null;
        this.tail = null;
    } else {
        let nextHead = this.head.next;
        this.head.next = null;
        nextHead.pre = null;
        this.head = nextHead;
    }
}

MyLinkedList.prototype.deleteAtTail = function () {
    if(this.head == null) {
        return;
    } else if (this.head.next == null) {
        this.head = null;
        this.tail = null;
    } else {
        let newTail = this.tail.pre;
        newTail.next = null;
        this.tail.pre = null;
        this.tail = newTail;
    }
}