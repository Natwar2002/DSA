class node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

var Queue = function() {
    this.head = null;
    this.tail = null;
};

MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null) {
        this.addAtHead(val);
        return;
    } else {
        let cur = this.head;
        while(cur.next != null) {
            cur = cur.next;
        }
        let n = new node(val);
        cur.next = n;
    }
};
