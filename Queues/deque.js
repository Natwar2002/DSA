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

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head == null) {
        this.head = new node(val);
        return;
    } else {
        let n = new node(val);
        this.head.pre = n;
        n.next = this.head;
        this.head = n;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null) {
        this.addAtHead(val);
        return;
    } else {
        let n = new node(val);
        this.tail.next = n;
        this.tail = n;
    }
};

MyLinkedList.prototype.deleteAtHead = function () {
    if(this.head == null) return;
    let nextHead = this.head.next;
    let nodeToBeDel = this.head;
    this.head = nextHead;
    nodeToBeDel.next = null;
}

MyLinkedList.prototype.deleteAtTail = function () {
    let newTail = 
}