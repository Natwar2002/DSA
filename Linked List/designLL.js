class node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

var MyLinkedList = function() {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let i = 0;
    let temp = this.head;
    while(i < index && temp != null) {
        temp = temp.next;
        i++;
    }
    if(i != index) return -1;
    if(temp == null) return -1;
    return temp.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head == null) {
        this.head = new node(val);
    } else {
        let n = new node(val);
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
        let cur = this.head;
        while(cur.next != null) {
            cur = cur.next;
        }
        let n = new node(val);
        cur.next = n;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(this.head == null && index != 0) return;
    if(this.head == null) {
        this.addAtHead(val);
        return;
    }
    if(index == 0) {
        this.addAtHead(val);
        return;
    }
    let pre = null;
    let cur = this.head;
    let i = 0;  
    while(i < index && cur != null) {
        pre = cur;
        cur = cur.next;
        i++;
    } 
    if(i != index) return;
    let n = new node(val);
    pre.next = n;
    n.next = cur;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(this.head == null) return;
    if(index == 0) {
        this.deleteAtHead();
        return;
    }
    let pre = null;
    let nodeToBeDel = this.head;
    let i = 0;  
    while(i < index && nodeToBeDel != null) {
        pre = nodeToBeDel;
        nodeToBeDel = nodeToBeDel.next;
        i++;
    } 
    if(i != index) return;
    if(nodeToBeDel == null) return;
    let newNext = nodeToBeDel.next;
    pre.next = newNext;
    nodeToBeDel.next = null;
};

MyLinkedList.prototype.deleteAtHead = function () {
    if(this.head == null) return;
    let nextHead = this.head.next;
    let nodeToBeDel = this.head;
    this.head = nextHead;
    nodeToBeDel.next = null;
}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */