class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        // Code here
        
    }
}

const linkedListExample = new LinkedList(10);
console.log(linkedListExample);