//! Creating Nodes
//* Node Factory
const nodeFactory = (name) => {
  return { name, nextNode: null };
};
const adamNode = nodeFactory("Adam");
console.log(adamNode);

const eveNode = nodeFactory("Eve");
console.log(eveNode);

//* Node Class
class NodeClass {
  constructor(name) {
    (this.name = name), (this.nextNode = null);
  }
}
const adamNodeClass = new NodeClass("adam");
console.log(adamNodeClass);

const eveNodeClass = new NodeClass("eve");
console.log(eveNodeClass);

//! LinkedList
//* Factory LinkList
const linkedListNode = (node) => {
  return {};
};

//* Class LinkedList
class Linkedlist {
  constructor(name, nextNode) {
    super(name, nextNode);
  }
  append(node) {
    if (node.nextNode === null) {
      return (node.nextNode = node.name);
    }
    return this.append(node.nextNode);
  }
  prepand(node) {
    if (node.nextNode !== null) {
      node.name = node.nextNode;
    }
    this.prepand(node.name);
  }
  size(node) {
    let count = 0;
    if (node.nextNode !== null) {
      count++;
    }
    if (node.nextNode === null) {
      return count;
    }
    this.size(node.nextNode);
  }
  head(node) {
    if (node.name === "Head") {
      return node.name;
    }
  }
  tail(node) {
    if (this.node.nextNode === null) {
      return this.node.name;
    }
    this.tail(node.nextNode);
  }
  at(index) {
    let i = 0;
    if (i === index) {
      return node;
    } else {
      node.nextNode;
      i++;
    }
  }
  pop(node) {
    if (node.nextNode.node.nextNode === null) {
      node.nextNode = null;
    }
    return pop(node.nextNode);
  }
  contains(name) {
    if (node.name === name) {
      return true;
    }
    if (node.next === null) {
      return false;
    }
    return this.contains(node.next.name);
  }
  find(name) {
    let ii = 0;
    if (node.next === name) {
      return ii;
    }
    ii++;
    return this.find(node.next.name);
  }
  toString() {
    if (node.next !== null) {
      JSON.stringify(node);
    } else {
      return;
    }
  }
}
