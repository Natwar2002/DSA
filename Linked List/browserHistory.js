class ListNode {
    constructor(val, nextNode = null, prevNode = null) {
        this.val = val;
        this.next = nextNode;
        this.prev = prevNode
    }
}

class BrowserHistory {
    constructor(homepage) {
        this.curr = new ListNode(homepage)
    }


    visit(url) {
        const newNode = new ListNode(url);
        newNode.next = null;
        this.curr.next = newNode;
        newNode.prev = this.curr
        this.curr = newNode;
    }

    back(steps) {
        for (let i = 0; i < steps; i++) {
            if (!this.curr.prev) return this.curr.val;
            this.curr = this.curr.prev
        }
        return this.curr.val
    }

    forward(steps) {
        for (let i = 0; i < steps; i++) {
            if (!this.curr.next) return this.curr.val;
            this.curr = this.curr.next
        }
        return this.curr.val
    }
}