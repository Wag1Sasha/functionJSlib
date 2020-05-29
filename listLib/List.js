var colors = require("colors");
class List {
  constructor() {
    this.node = {
      prev: null,
      next: null,
      value: null,
    };
    this.length = 0;
  }

  addToStart = (element) => {
    if (!this.length) {
      this.node.value = element;
      this.length++;
      return;
    }

    const node = {
      prev: null,
      next: this.node,
      value: element,
    };
    this.node.prev = node;
    this.node = node;
    this.length = this.length + 1;
  };

  showNode = (node) => {
    process.stdout.write("{ ");
    process.stdout.write("node.value = ".white + `${node.value} `.green);
    process.stdout.write(" *** ");
    if (node.next) {
      if (node.next.value) {
        process.stdout.write(
          "node.next.value = ".white + `${node.next.value} `.green
        );
      }
    } else {
      process.stdout.write("node.next.value : ".red + " null ".blue);
    }
    process.stdout.write(" *** ");

    if (node.prev) {
      if (node.prev.value)
        process.stdout.write(
          "node.prev.value = ".white + `${node.prev.value} `.green
        );
    } else {
      process.stdout.write("node.prev.value : ".red + ` null `.blue);
    }
    process.stdout.write("  } ---> \n");
  };
  showList = () => {
    let iterator = this.node;
    this.showNode(iterator);
    while (iterator.next) {
      this.showNode(iterator.next);
      iterator = iterator.next;
    }
    console.log("NULL");
  };

  addToEnd = (element) => {
    let iterator = this.node;
    if (!this.length) {
      this.node.value = element;
      this.length++;
      return;
    }
    const node = {
      prev: null,
      next: null,
      value: element,
    };
    while (iterator.next) {
      iterator = iterator.next;
    }
    iterator.next = node;
    node.prev = iterator;
    this.length = this.length + 1;
  };

  addToPlace = (element, place, ...rest) => {
    if (!this.length) {
      this.node.value = element;
      this.length++;
      return;
    }
    const node = {
      prev: null,
      next: null,
      value: element,
    };
    let iterator = this.node;
    for (let i = 0; i < place - 1; i++) {
      iterator = iterator.next;
    }
    let next = iterator.next;
    let prev = iterator.next.prev;
    iterator.next.prev = node;
    iterator.next = node;
    node.next = next;
    node.prev = prev;

    this.length = this.length + 1;
  };
  deleteFirstElement = () => {
    if (!this.length) {
      return;
    }
    this.node.next.prev = this.node;
    this.node = this.node.next;
    this.node.prev = null;
    this.length = this.length - 1;
  };
  deleteLastElement = () => {
    if (!this.length) {
      return;
    }
    let iterator = this.node;
    while (iterator.next) {
      iterator = iterator.next;
    }
    iterator = iterator.prev;
    iterator.next = null;
    this.length = this.length - 1;
  };
  deleteElement = (element, ...rest) => {
    let iterator = this.node;
    for (let i = 0; i < this.length; i++) {
      iterator = iterator.next;
      console.log(iterator);
    }
  };

  // sort = () => {};
  // reverse = () => {};
}

module.exports = List;
