class CircularQueue {
    constructor(k) {
        this.max = k;
        this.q = new Array(k);
        this.head = 0;
        this.tail = -1;
    }

    enqueue(val) {
        if(this.isFull()) return -1;
        this.tail = (this.tail + 1) % this.max;
        this.q[this.tail] = val;
        return true;
    }

    dequeue() {
        if(this.isEmpty()) return -1;
        if(this.head == this.tail) {
            this.head = 0;
            this.tail = -1;
        } else {
            this.head = (this.head + 1) % this.max;
        }
        return true;
    }

    front() {
        if(this.isEmpty()) return -1;
        return this.q[this.head];
    }

    rear() {
        if(this.isEmpty()) return -1;
        return this.q[this.tail];
    }

    isEmpty() {
        return this.tail == -1; 
    }

    isFull() {
        return !this.isEmpty() && (this.tail + 1) % this.max === this.head;
    }
}