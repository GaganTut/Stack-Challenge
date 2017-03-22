var linkList = function() {
  var headNode = null;
  var tailNode = null;

  function getHead() {
    return headNode;
  }

  function getTail() {
    return tailNode;
  }

  function newNode(val) {
    var newNode = {
      value: val,
      next: null
    };
    return newNode;
  }

  function addNode(val) {
    var newNode = newNode();

    if (getHead() === null) {
      headNode = newNode;
      tailNode = newNode;
    } else if(getHead.next === null){
      tailNode = newNode;
    } else {
      tailNode.next = newNode;
      tailNode = newNode;
    }
  }

  function getNode(num) {
    var currentNode = headNode;

    for (var i = 0; i < num; i++) {
      if(currentNode.next === null) {
        return false;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  function saveHead(val) {
    var newHead = newNode(val);
    var currentHead = getHead();

    if (currentHead === null) {
      currentHead = newHead;
      tailNode = newHead;
    } else {
      newHead.next = currentHead;
      currentHead = newHead;
    }
  }

  function dumpList() {
    var currentHead = getHead();
    currentHead = null;
  }

  return {
    getHead,
    saveHead,
    dumpList
  };


};