class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    reverseBetween(start, end) {
        if (!this.head || start === end) return;

        let dummy = new Node(0);
        dummy.next = this.head;
        let prev = dummy;

        for (let i = 0; i < start - 1; i++) {
            prev = prev.next;
        }

        let current = prev.next;
        for (let i = 0; i < end - start; i++) {
            let nextNode = current.next;
            current.next = nextNode.next;
            nextNode.next = prev.next;
            prev.next = nextNode;
        }

        this.head = dummy.next;
    }

    printList() {
        let current = this.head;
        let output = '';
        while (current) {
            output += current.val + ' ';
            current = current.next;
        }
        console.log(output);
    }
}

let list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

console.log('Asl ro'yxat:');
list.printList();

list.reverseBetween(2, 4);

console.log('O\'zgargan ro\'yxat:');
list.printList();
