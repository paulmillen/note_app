"use strict";

(function(exports) {
  function NoteController(list) {
    this.list = list;
    this.view = new View(list);
  };
  NoteController.prototype.html = function() {
    document.getElementById("app").innerHTML = this.view.listHtml();
  };
  exports.NoteController = NoteController;
})(this);
