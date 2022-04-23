class BinaryTree {

  constructor() {
    this.root = null;
  }
  addNode(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(node);
    }
  }

  insertNode(node) {
    let currentNode = this.root;

    while(currentNode) {
      if (node.value < currentNode.value) {
        if(currentNode.left === null) {
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if(currentNode.right === null){
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinaryTree();
tree.addNode(10);
tree.addNode(5);
tree.addNode(12);
tree.addNode(7);
console.log(tree);
