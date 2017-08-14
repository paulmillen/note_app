(function(exports) {
  function View(list) {
    this.listToView = list;
  };
  View.prototype._listTextArray = function() {
    var returnArray = [];
    this.listToView
        .getItems
        .forEach(function(note) { returnArray.push(note.text) });
    return returnArray;
  };
  View.prototype.listHTML = function() {
    return "<ul><li><div>" + this._listTextArray().join("</div></li><li><div>") + "</div></li></ul>";
  }
  exports.View = View;
})(this);
