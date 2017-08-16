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

// window.onload = function () {
//   var list = new List();
//   var view = new View(list);
//   var noteController = new NoteController(list);
//   console.log(noteController.view.listHtml())
//   noteController.html();
// };

// function getNoteFromUrl(location) {
//   return Number(location.hash.split("/")[1]);
// };
//
// function getTextFromList(getNoteFromUrl) {
//   return this.list[getNoteFromURL].getText;
// };
//
// function updateAppHtml(getTextFromList) {
//   document.getElementById("app").innerHTML = getTextFromList;
// };
