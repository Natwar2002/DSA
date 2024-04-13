var deleteDuplicates = function(head) {
    let cur = head;
    while(cur != null && cur.next != null) {
        if(cur.val == cur.next.val) {
            let toBeRemoved = cur.next;
            cur.next = toBeRemoved.next;
            toBeRemoved.next = null;
        } else {
            cur = cur.next;
        }
    }
    return head;
};