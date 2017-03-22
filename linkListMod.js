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

  function saveHead(val) {
    var newHead = newNode(val);

    if (headNode === null) {
      headNode = newHead;
      tailNode = newHead;
    } else {
      newHead.next = headNode;
      headNode = newHead;
    }
  }

  function dumpList() {
    headNode = null;
  }

  function returnList() {
    var dataList = "";
    var travNode = getHead();

    while (travNode !== null) {
      dataList += travNode.value + " ";
      travNode = travNode.next;
    }

    return dataList;
  }

  return {
    getHead,
    saveHead,
    dumpList,
    returnList
  };
};