import { Node } from './node.js';

class LinkedList {
  constructor() {
    this.head = new Node(); // Set dummy head with null values
    this.tail = this.head;
  }

  append(value) {
    const newNode = new Node(value, null);
    this.tail.nextNode = newNode;
    this.tail = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.head.nextNode);
    this.head.nextNode = newNode;
    if (this.tail === this.head) {
      this.tail = newNode;
    }
  }

  size() {
    let count = 0;
    let pointer = this.head.nextNode;
    while (pointer != null) {
      count += 1;
      pointer = pointer.nextNode;
    }
    return count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let pointer = this.head.nextNode;
    for (let i = 1; i < index; i++) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }

  pop() {
    let current = this.head;
    let pointer = this.head.nextNode;
    while (pointer.nextNode != null) {
      current = current.nextNode;
      pointer = pointer.nextNode;
    }
    this.tail = current;
    current.nextNode = null;
    pointer = null;
  }

  contains(value) {
    let pointer = this.head.nextNode;
    while (pointer != null) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.nextNode;
    }
    return false;
  }

  // returns index of value
  find(value) {
    let pointer = this.head.nextNode;
    let count = 1;
    while (pointer != null) {
      if (pointer.value === value) {
        return count;
      }
      pointer = pointer.nextNode;
      count++;
    }
    return `"${value}" not found.`;
  }

  toString() {
    let pointer = this.head.nextNode;
    let linkedString = '';
    while (pointer != null) {
      linkedString += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }
    console.log(`${linkedString} null`);
  }

  insertAt(value, index) {
    // Start pointer at head instead of head.nextNode
    let pointer = this.head;

    for (let i = 1; i < index; i++) {
      pointer = pointer.nextNode;
    }

    // Make new Node pointing to the index + 1 element
    let newNode = new Node(value, pointer.nextNode)

    // Set the element before to point to the newNode
    pointer.nextNode = newNode;
  }

  removeAt(index) {
    let current = this.head;
    let pointer = this.head.nextNode;
    for (let i = 1; i < index; i++) {
      current = current.nextNode;
      pointer = pointer.nextNode;
    }
    current.nextNode = pointer.nextNode;
    pointer = null;
  }
}

const linkedList = new LinkedList();
linkedList.append('dog');
linkedList.append('cat');
linkedList.prepend('bird');
linkedList.prepend('snake');
linkedList.append('tiger');
linkedList.pop();
linkedList.append('panda');

linkedList.toString();
// console.log(linkedList.size());
// console.log(linkedList.at(3));
// console.log(linkedList.contains('dog'));
// console.log(linkedList.contains('panda'));
// console.log(linkedList.find('dog'));
// console.log(linkedList.find('hawk'));
// console.log(linkedList.find('panda'));

linkedList.insertAt('fish', 4);
linkedList.toString();
linkedList.removeAt(3)
linkedList.toString();
