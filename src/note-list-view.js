"use strict";

(function(exports) {
  function View(list) {
    this.listToView = list;
  };
  View.prototype._listTextArray = function() {
    return this.listToView
        .getItems()
        .map(function(note) {
          return "<a href='#note/" + note.getId() + "'>" + note.getText().substring(0,20) + "</a>"
        });
  };
  View.prototype.listHtml = function() {
    return "<ul><li><div>" + this._listTextArray().join("</div></li><li><div>") + "</div></li></ul>"
  }
  exports.View = View;
})(this);
