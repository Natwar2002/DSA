var reverseList = function (head) {
    let pre = null, cur = head;
    while(cur != null) {
        let nextNode = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextNode;
    }
    return pre;
}