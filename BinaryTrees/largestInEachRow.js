class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // head of the ll
        this.tail = null; // tail of the ll
    }

    isEmpty() {
        return this.head == null;
    }

    getHead() {
        if(this.head == null) return undefined;
        return this.head.val;
    }

    getTail() {
        if(this.tail == null) return undefined;
        return this.tail.val;
    }

    removeAtHead() {
        if(this.head == null) return; // ll is empty
        const newHead = this.head.next; // we will store the new head
        this.head.next = null; // disconnect the old head from the ll
        this.head = newHead; // allocating the brand new head

        // if head beconmes null after removal of the node means ll is empty now
        if(this.head == null) {
            this.tail = null;
        }
    }

    addAtTail(data) {
        if(this.head == null) {
            // ll is empty
            const newNode = new Node(data);
            this.head = newNode;
            this.tail = newNode;
            return;
        } else {
            const newNode = new Node(data);
            this.tail.next = newNode; // we are attaching the new node after the prev tail
            this.tail = newNode; // we updated the tail property
        }
    }
}

class Queue {
    constructor() {
        this.ll = new LinkedList(); // we will create a brand new empty list
    }
    enqueue(data) {
        this.ll.addAtTail(data);
    }

    dequeue() {
        this.ll.removeAtHead();
    }

    isEmpty() { 
        return this.ll.isEmpty();
    }

    front() {
        return this.ll.getHead();
    }

    back() {
        return this.ll.getTail();
    }
}

function largestValues (root) {
    if(!root) return [];
    const q = new Queue();
    q.enqueue(root);
    q.enqueue(null);
    const res = [];
    let level = new Array();
    while(!q.isEmpty()) {
        let cur = q.front();
        q.dequeue();
        if(cur == null) {
            if(!q.isEmpty()) {
                res.push(Math.max(...level));
                q.enqueue(null);
                level = new Array();
            } else {
                res.push(Math.max(...level));
            }
        } else {
            level.push(cur.val);
            if(cur.left != null) {
                q.enqueue(cur.left);
            }
            if(cur.right != null) {
                q.enqueue(cur.right);
            } 
        }
    }
    return res;
}