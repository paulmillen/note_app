"use strict";

(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  };
  SingleNoteView.prototype.Html = function() {
    return "<div>" + this.note.getText() + "</div>"
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
