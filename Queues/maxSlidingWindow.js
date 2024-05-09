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
};

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
};

MyLinkedList.prototype.isEmpty = function () {
    return this.head == null;
};

class Deque {
    constructor () {
        this.dll = new MyLinkedList();
    }
    addAtFront (val) {
        this.dll.addAtHead(val);
    }
    addAtBack (val) {
        this.dll.addAtTail(val);
    }
    removeAtFront () {
        this.dll.deleteAtHead();
    }
    removeAtBack () {
        this.dll.deleteAtTail();
    }
    isEmpty () {
        return this.dll.isEmpty();
    }
    getFront () {
        if (this.dll.head) {
            return this.dll.head.val;
        }
    }
    getBack () {
        if (this.dll.tail) {
            return this.dll.tail.val;
        }
    }
}

var maxSlidingWindow = function (nums, k) {
    let d = new Deque();
    let res = [];
    for(let i = 0; i < k; i++) {
        if(d.isEmpty()) {
            d.addAtBack(i)
        } else {
            while(!d.isEmpty() && nums[i] > nums[d.getBack()]) {
                d.removeAtBack();
            }
            d.addAtBack(i);
        }
    }
    res.push(nums[d.getFront()]);

    for(let i = k; i < nums.length; i++) {
        while(!d.isEmpty() && d.getFront() <= i-k) {
            d.removeAtFront();
        }
        if(d.isEmpty()) {
            d.addAtBack(i);
        } else {
            while(!d.isEmpty() && nums[i] > nums[d.getBack()]) {
                d.removeAtBack();
            }
            d.addAtBack(i);
        }
        res.push(nums[d.getFront()]);
    }
    return res;
}

let nums = [1,3,-1,-3,5,3,6,7], k = 3;
console.log(maxSlidingWindow(nums, k));