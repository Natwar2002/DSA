var middleNode = function (head) {
    let count = 0, temp = head;
    while(temp != null) {
        temp = temp.next;
        count++;
    }
    let mid = Math.floor(count/2);
    temp = head;
    while(temp != null) {
        if(mid == 0) break;
        mid--;
        temp = temp.next;
    }
    return temp;
};


// Tortoise and hare method

var middleNode = function (head) {
    let slow = head, fast = head;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};