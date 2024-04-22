var partition = function(head, x) {
    let d1 = new ListNode(), d2 = new ListNode(), t1 = d1, t2 = d2, cur = head;
    while (cur != null) {
        let temp = cur;
        cur = cur.next;
        temp.next = null;

        if(temp.val < x) {
            t1.next = temp;
            t1 = t1.next;
        } else {
            t2.next = temp;
            t2 = t2.next;
        }
    }
    t1.next = d2.next;
    d2.next = null;
    return d1.next;
};