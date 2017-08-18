"use strict";

(function(exports) {
  var id = 0
  function Note(message) {
    this.text = message;
    this.id = id;
    id ++;
  };
  Note.prototype.getText = function() {
    return this.text
  };
  Note.prototype.getId = function() {
    return this.id;
  }
  exports.Note = Note;
})(this);
