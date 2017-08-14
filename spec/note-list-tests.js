(function(exports) {
  function testListEmptyArray() {
    var description = 'List instantiates empty array'
    var list = new List();
    assert.isTrue(list.items === list.ARRAY);
    testFeedback(description);
  };
  exports.testListEmptyArray = testListEmptyArray();
})(this);

(function(exports) {
  function testNewList() {
    var description = 'addItem creates a new list item'
    var list = new List();
    var message = "This is a test"
    list.addItem(message);
    assert.isTrue(list.items[0].text === "This is a test");
    testFeedback(description);
  };
  exports.testNewList = testNewList();
})(this);
