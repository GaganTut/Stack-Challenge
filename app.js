(function() {
  var pageDiv = document.querySelector("#wholePage");

  var newForm = document.createElement("textarea");

  var saveBtn = document.createElement("button");
  saveBtn.innerHTML = "Save";

  var dumpBtn = document.createElement("button");
  dumpBtn.innerHTML="Dump";

  pageDiv.appendChild(newForm);
  pageDiv.appendChild(saveBtn);
  pageDiv.appendChild(dumpBtn);


})();