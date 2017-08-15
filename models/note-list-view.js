"use strict";

(function(exports) {
  function View(list) {
    this.listToView = list;
  };
  View.prototype._listTextArray = function() {
    var returnArray = [];
    this.listToView
        .getItems()
        .forEach(function(note) {
          returnArray.push(note.getText().substring(0,20))
        });
    return returnArray;
  };
  View.prototype.listHtml = function() {
    return "<ul><li><div>" + this._listTextArray().join("</div></li><li><div>") + "</div></li></ul>";
  }
  exports.View = View;
})(this);
