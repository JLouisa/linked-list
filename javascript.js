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
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

//? +++++++++++++++++++++++++++++++
//Manual creation
const a = new NodeClass("Adam");
const c = new NodeClass("Cain");
const e = new NodeClass("Eve");
const n = new NodeClass("Noah");

// Manual Pointing
a.nextNode = c;
c.nextNode = e;
e.nextNode = n;
//Manually print
// console.log(a);
// console.log(c);
// console.log(e);
// console.log(n);

//Automatically print
function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.nextNode;
  }
}

printLinkedList(a);

//? +++++++++++++++++++++++++++++++

//! LinkedList
//* Class LinkedList
class Linkedlist {
  constructor() {
    this.name = null;
    this.nextNode = null;
  }
  //   append(data) {
  //     if (this.nextNode === null) {
  //       const node = new NodeClass(data, this.nextNode);
  //       this.data = this.name;
  //       this.nextNode = node;
  //       return node;
  //     } else if (this.nextNode !== null) {
  //       return this.append(this.nextNode.data);
  //     }
  //   }
  //   prepand(node) {
  //     if (node.nextNode !== null) {
  //       node.name = node.nextNode;
  //     }
  //     this.prepand(node.name);
  //   }
  //   size(node) {
  //     let count = 0;
  //     if (node.nextNode !== null) {
  //       count++;
  //     }
  //     if (node.nextNode === null) {
  //       return count;
  //     }
  //     this.size(node.nextNode);
  //   }
  //   head(node) {
  //     if (node.name === "Head") {
  //       return node.name;
  //     }
  //   }
  //   tail(node) {
  //     if (this.node.nextNode === null) {
  //       return this.node.name;
  //     }
  //     this.tail(node.nextNode);
  //   }
  //   at(index) {
  //     let i = 0;
  //     if (i === index) {
  //       return node;
  //     } else {
  //       node.nextNode;
  //       i++;
  //     }
  //   }
  //   pop(node) {
  //     if (node.nextNode.node.nextNode === null) {
  //       node.nextNode = null;
  //     }
  //     return pop(node.nextNode);
  //   }
  //   contains(name) {
  //     if (node.name === name) {
  //       return true;
  //     }
  //     if (node.next === null) {
  //       return false;
  //     }
  //     return this.contains(node.next.name);
  //   }
  //   find(name) {
  //     let ii = 0;
  //     if (node.next === name) {
  //       return ii;
  //     }
  //     ii++;
  //     return this.find(node.next.name);
  //   }
  //   toString() {
  //     if (node.next !== null) {
  //       JSON.stringify(node);
  //     } else {
  //       return;
  //     }
  //   }
}

// Todo =======================================
// const myLinkedList = new Linkedlist();
// myLinkedList.append("Adam");
// myLinkedList.append("Eve");
// Todo =======================================
