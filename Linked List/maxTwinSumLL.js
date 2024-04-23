var pairSum = function(head) {
    let fast = head, slow = head;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let middle = slow;
    while (middle != null) {
        let nextNode = middle.next;
        middle.next = fast;
        fast = middle;
        middle = nextNode;
    }

    let ans = 0, cur = head;
    while(fast != null) {
        let sum = cur.val + fast.val;
        ans = Math.max(ans, sum);
        fast = fast.next;
        cur = cur.next;
    }
    return ans;
    
};