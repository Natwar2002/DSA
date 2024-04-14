class node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var MyLinkedList = function (){
    this.head = null;
}

MyLinkedList.prototype.addAtHead (val) {
    if(this.head == null) {
        this.head = new node(val);
        return;
    }
    let n = new node(val);
    n.next = this.head;
    this.head = n;
}

MyLinkedList.prototype.deleteAtHead() {
    if(this.head == null) return;
    let newHead = this.head.next;
    let nodeToBeDel = this.head;
    this.head = newHead;
    nodeToBeDel.next = null;
}


let s = new Stack();
console.log(s.isEmpty());