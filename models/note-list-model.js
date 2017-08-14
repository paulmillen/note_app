(function(exports) {
  function List() {
    this.ARRAY = []
    this.items = this.ARRAY;
  };
  List.prototype.getItems = function() {
    return this.items;
  };
  List.prototype.addItem = function(message) {
    this.items.push(new Note(message));
  };
  exports.List = List;
})(this);
