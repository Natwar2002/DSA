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
    addAtTail (val) {
        if (this.head == null) {
            this.addAtHead(val);
            return;
        } else {
            let n = new node (val);
            this.tail.next = n;
            n.pre = this.tail;
            this.tail = n;
        }
    }
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
    isEmpty () {
        return this.head == null;
    }
    display () {
        let temp = this.head;
        while(temp != null) {
            console.log(temp.val);
            temp = temp.next;
        }

        console.log("******");

        temp = this.tail;
        while(temp != null) {
            console.log(temp.val);
            temp = temp.pre;
        }
    }
}

let dll = new DoublyLinkedList();
dll.addAtHead(30);
dll.addAtHead(20);
dll.addAtTail(40);
dll.addAtTail(50);
dll.addAtHead(10);

dll.display();

dll.removeAtHead();
dll.removeAtTail();
console.log();
dll.display();