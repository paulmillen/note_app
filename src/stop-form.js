"use strict";

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
