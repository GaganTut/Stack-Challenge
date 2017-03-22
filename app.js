(function() {
  var myNode = linkList();

  var pageDiv = document.querySelector("#wholePage");

  var newForm = document.createElement("textarea");

  var saveBtn = document.createElement("button");
  saveBtn.innerHTML = "Save";
  saveBtn.addEventListener("click", function() {
    myNode.saveHead(newForm.value);
    newForm.value = "";
  });

  var dumpBtn = document.createElement("button");
  dumpBtn.innerHTML="Dump";
  dumpBtn.addEventListener("click", function() {
    var dataList = document.createElement("p");
    pageDiv.appendChild(dataList);
    dataList.innerHTML += myNode.returnList();
    myNode.dumpList();
  });

  pageDiv.appendChild(newForm);
  pageDiv.appendChild(saveBtn);
  pageDiv.appendChild(dumpBtn);

})();