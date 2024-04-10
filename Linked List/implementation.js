class linkedList {
    constructor (val) {
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
    }
    return temp.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head == null) {
        this.head = new linkedList(val);
    } else {
        let node = new linkedList(val); 
        node.next = this.head;
        this.head = node;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null) {
        return this.addAtHead(val);
    } else {
        let node = new linkedList(val)
        let current = this.head;
        while(current.next != null) {
            current = current.next;
        }
    node = new linkedList(val);
    current.next = node;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index === 0) return this.addAtHead(val);
    if(index === this.length()) return this.addAtTail(val);
    if(index > this.length()) return;
    let cur = this.head;
    let node = new linkedList(val);
    for(let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }
    let next = cur.next;
    cur.next = node;
    node.next = next;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(this.head == null) return;
    let i = 0;
    let pre = null;
    let nodeToBeDel = this.head;
    while(i < index && nodeToBeDel != null) {
        pre = nodeToBeDel;
        nodeToBeDel = nodeToBeDel.next;
        i++;
    }
    if(i != index) return;
    let newNext = nodeToBeDel.next;
    pre.next = newNext;
    nodeToBeDel.next = null;
};

MyLinkedList.prototype.length = function (){
    let length = 0, cur = this.head;
    while(cur != null) {
        cur = cur.next;
        len++;
    }
    return length;
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

["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]];