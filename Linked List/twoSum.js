class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var MyLinkedList = function () {
    this.head = null;
}

var addTwoNumbers = function (l1, l2) {
    let dummy = new node();
    let res = dummy;
    let total = 0, carry = 0;

    while (l1 != null || l2 != null || carry != 0) {
        total = carry;

        if (l1 != null) {
            total += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            total += l2.val;
            l2 = l2.next;
        }

        let n = total % 10;
        carry = Math.floor(total / 10);
        dummy.next = new node(val);
        dummy = dummy.next;
    }
    return res.next;
};