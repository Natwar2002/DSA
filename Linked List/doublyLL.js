class node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.pre = null;
    }
}

class DoublyLinkedList{
    constructor (){
        this.head = null;
        this.tail = null;
    }

    addAtHead (val) {
        if(this.head == null) {
            let n = new node(val);
            this.head = n;
            this.tail = n;
        } else {
            let n = new node(val);
            this.head.pre = n;
            n.next = this.head;
            this.head = n;
        }
    }
}