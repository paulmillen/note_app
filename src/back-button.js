"use strict";

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
