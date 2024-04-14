class node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var MyLinkedList = function (){
    this.head = null;
}

MyLinkedList.prototype.addAtHead = function (val) {
    if(this.head == null) {
        this.head = new node(val);
        return;
    }
    let n = new node(val);
    n.next = this.head;
    this.head = n;
}

MyLinkedList.prototype.deleteAtHead = function () {
    if(this.head == null) return;
    let newHead = this.head.next;
    let nodeToBeDel = this.head;
    this.head = newHead;
    nodeToBeDel.next = null;
}

class Stack {
    #ll;

    constructor() {
        this.#ll = new MyLinkedList();
    }

    push (element) {
        this.#ll.addAtHead(element);
    }

    pop () {
        this.#ll.deleteAtHead();
    }

    top () {
        return this.#ll.head.val;
    }

    isEmpty () {
        return this.#ll.head == null;
    }
}

let s = new Stack();
s.push(10);
s.push(20);
console.log(s.top());
s.pop();
console.log(s.top());
console.log(s.isEmpty());