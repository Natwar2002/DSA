var removeNthFromEnd = function(head, n) {
    let fast = head, i = 0;
    while(i < n && fast != null) {
        fast = fast.next;
        i++;
    }
    if(fast == null) {
        // remove head
        let newHead = head.next;
        head.next = null;
        return newHead;
    }

    let slow = head;
    while(fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
    let toBeDel = slow.next;
    slow.next = toBeDel.next;
    toBeDel.next = null;
    return head;
};