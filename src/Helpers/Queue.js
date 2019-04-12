class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function removeUserFromQueue(user_name) {
  if (this.first === null) {
    return null;
  }

  let tempNode = this.first;
  let previousNode = this.first;

  while ((tempNode !== null) && (tempNode.value !== user_name)) {
    previousNode = tempNode;
    tempNode = tempNode.next;
  }
  if (tempNode === null) {
    return;
  }
  previousNode.next = tempNode.next;
}

function queueSize(queue) {
  let size = 0;
  if (queue.first === null) {
    return size;
  }
  let current = queue.first;
  while (current !== null) {
    current = current.next;
    size++;
  }
  return size;
}

module.exports = {
  Queue,
  queueSize,
  removeUserFromQueue
};