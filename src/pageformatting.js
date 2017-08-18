(function(exports) {
  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    if (location.hash) showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    var id = Number(location.hash.split("/")[1]);
    return list.getItems()[id].getText();
  };

  function showNote(noteText) {
    document
    .getElementById("app")
    .innerHTML = noteText;
    pageFormatting.hideElement("textform");
    pageFormatting.showElement("backbutton");
  };
  exports.makeUrlChangeShowNoteForCurrentPage = makeUrlChangeShowNoteForCurrentPage;
})(this);

(function(exports) {
  function stopForm() {
    document
    .getElementById("textform")
    .addEventListener("submit", function(event) {
      event.preventDefault(),
      addNewNoteToList(event.path[0].elements[0].value),
      pageFormatting.resetTextArea();
    })
  };

  function addNewNoteToList(text) {
    if (text.length === 0) return;
    list.addItem(text);
    noteController.html();
  };
  exports.stopForm = stopForm;
})(this);

(function(exports) {
  function backButton() {
    document
    .getElementById("backbutton")
    .addEventListener("click", function() {
      pageFormatting.hideElement("backbutton"),
      pageFormatting.showElement("textform"),
      noteController.html(),
      location.replace("#")
    });
  };
  exports.backButton = backButton;
})(this);

(function(exports) {
  function PageFormatting() {}

  PageFormatting.prototype.resetTextArea = function() {
    document.getElementById("textarea").value = "";
  };

  PageFormatting.prototype.hideElement = function(id) {
    document
      .getElementById(id)
      .style = "display:none";
  };

  PageFormatting.prototype.showElement = function(id) {
    document
      .getElementById(id)
      .style = '';
  };
  exports.PageFormatting = PageFormatting;
})(this);
