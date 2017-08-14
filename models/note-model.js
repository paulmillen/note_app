(function(exports) {
  function Note(message) {
    this.text = message;
  };
  Note.prototype.getText = function() {
    return this.text
  };
  exports.Note = Note;
})(this);
