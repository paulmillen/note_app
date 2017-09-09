var list = new List();

(function(exports) {
  function testListEmptyArray() {
    var description = 'List instantiates empty array'
    assert.isTrue(list.items === list.ARRAY);
    testFeedback(description);
  };
  testListEmptyArray();
})(this);

(function(exports) {
  function testNewList() {
    var description = 'addItem creates a new list item'
    var message = "This is a test"
    list.addItem(message);
    assert.isTrue(list.items[0].text === "This is a test");
    testFeedback(description);
  };
  testNewList();
})(this);
