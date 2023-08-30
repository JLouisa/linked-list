//! Creating Nodes
// //* Node Factory
// const nodeFactory = (name) => {
//   return { name, nextNode: null };
// };
// const adamNode = nodeFactory("Adam");
// console.log(adamNode);

// const eveNode = nodeFactory("Eve");
// console.log(eveNode);

//* Node Class
class NodeClass {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// //? +++++++++++++++++++++++++++++++
// //Manual creation
// const a = new NodeClass("Adam");
// const c = new NodeClass("Cain");
// const e = new NodeClass("Eve");
// const n = new NodeClass("Noah");

// // Manual Pointing
// a.nextNode = c;
// c.nextNode = e;
// e.nextNode = n;
// //Manually print
// // console.log(a);
// // console.log(c);
// // console.log(e);
// // console.log(n);

// //Automatically print
// function printLinkedList(head) {
//   let current = head;
//   while (current !== null) {
//     console.log(current.value);
//     current = current.nextNode;
//   }
// }

// function printLinkedListRec(head) {
//   if (head === null) {
//     return;
//   } else {
//     console.log(head.value);
//     return printLinkedListRec(head.nextNode);
//   }
// }

// // printLinkedList(a);
// printLinkedListRec(a);

//? +++++++++++++++++++++++++++++++

//! LinkedList
//* Class LinkedList
class Linkedlist {
  constructor() {
    this.value = "Head";
    this.thehead = null;
  }
  prepend(data) {
    this.thehead = new NodeClass(data, this.nextNode);
  }
  append(data) {
    let node = new NodeClass(data, this.nextNode);
    if (this.thehead === null) {
      this.thehead = node;
    } else {
      let current = this.thehead;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
  }
  size() {
    let count = 0;
    let current = this.thehead;
    while (current !== null) {
      current = current.nextNode;
      count++;
    }
    return count;
  }
  head() {
    return this.thehead.nextNode;
  }
  tail() {
    let current = this.thehead;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }
  at(index) {
    let count = 0;
    let current = this.thehead;
    while (count !== index) {
      current = current.nextNode;
      count++;
    }
    return current;
  }
  pop() {
    let node;
    let current = this.thehead;
    if (this.thehead.nextNode === null) {
      node = current.nextNode;
      this.thehead.nextNode = null;
      return `${node.value} removed`;
    } else {
      while (current.nextNode.nextNode !== null) {
        current = current.nextNode;
      }
      node = current.nextNode;
      current.nextNode = null;
      return `${node.value} removed`;
    }
  }
  contains(name) {
    let found = false;
    let current = this.thehead;
    while (current !== null) {
      if (current.value === name) {
        found = true;
        break;
      }
      current = current.nextNode;
    }
    return found;
  }
  find(name) {
    let count = 0;
    let current = this.thehead;
    while (current !== null) {
      if (current.value === name) {
        return `Index: ${count}`;
      }
      current = current.nextNode;
      count++;
    }
    return null;
  }
  toString() {
    let current = this.thehead;
    while (current !== null) {
      console.log(`${current.value} -> `);
      current = current.nextNode;
    }
  }
}

// Todo =======================================
const myLinkedList = new Linkedlist();
myLinkedList.append("Adam");
myLinkedList.append("Eve");
myLinkedList.append("Cain");
myLinkedList.append("Noah");
// Todo =======================================
