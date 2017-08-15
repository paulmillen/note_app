(function(exports) {
  function testView() {
    var description = 'Takes a list model on instantiation'
    var list = {}
    var view = new View(list);
    assert.isTrue(view.listToView === list);
    testFeedback(description);
  };
  exports.testView = testView();
})(this);

(function(exports) {
  function testViewListTextArray() {
    var description = "Returns an array of each list note's text"
    var note_1 = { getText: function() { return "This is a test" } };
    var note_2 = { getText: function() { return "This is also a test"} };
    var list = { getItems: function() { return  [note_1, note_2] } };
    var view = new View(list);
    var returnArray = view._listTextArray();
    assert.isTrue(returnArray[0] === "This is a test");
    assert.isTrue(returnArray[1] === "This is also a test");
    testFeedback(description);
  };
  exports.testViewListTextArray = testViewListTextArray();
})(this);

(function(exports) {
  function testViewListTextArrayMultiple() {
    var description = "Returns the list note's text in html - multiple notes"
    var note_1 = { getText: function() { return "This is a test" } };
    var note_2 = { getText: function() { return "This is also a test"} };
    var list = { getItems: function() { return  [note_1, note_2] } };
    var view = new View(list);
    assert.isTrue(view.listHtml() === "<ul><li><div>This is a test</div></li><li><div>This is also a test</div></li></ul>");
    testFeedback(description);
  };
  exports.testViewListTextArrayMultiple = testViewListTextArrayMultiple();
})(this);

(function(exports) {
  function testViewListTextArraySingle() {
    var description = "Returns the list note's text in html - single note"
    var note_1 = { getText: function() { return "This is a test" } };
    var list = { getItems: function() { return  [note_1] } };
    var view = new View(list);
    assert.isTrue(view.listHtml() === "<ul><li><div>This is a test</div></li></ul>");
    testFeedback(description);
  };
  exports.testViewListTextArraySingle = testViewListTextArraySingle();
})(this);

(function(exports) {
  function testViewListTextArrayNone() {
    var description = "Returns the list note's text in html - no notes"
    var list = { getItems: function() { return  [] } };
    var view = new View(list);
    assert.isTrue(view.listHtml() === "<ul><li><div></div></li></ul>");
    testFeedback(description);
  };
  exports.testViewListTextArrayNone = testViewListTextArrayNone();
})(this);
