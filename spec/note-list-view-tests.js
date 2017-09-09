var note_1 = {
  getText: function() { return "This is a test" },
  getId: function() { return 0 }
};
var note_2 = {
  getText: function() { return "This is also a test"},
  getId: function() { return 1 }
};
var note_long = {
  getText: function() { return "This is a test which has more than twenty characters" },
  getId: function() { return 0 }
};
var list_two_notes = { getItems: function() { return [note_1, note_2] } };

(function(exports) {
  function testView() {
    var description = 'Takes a list model on instantiation'
    var list = {}
    var view = new View(list);
    assert.isTrue(view.listToView === list);
    testFeedback(description);
  };
  testView();
})(this);

(function(exports) {
  function testViewListTextArray() {
    var description = "Returns an array of each list note's text"
    var view = new View(list_two_notes);
    assert.isTrue(view._listTextArray()[0] === "<a href='#note/0'>This is a test</a>")
    assert.isTrue(view._listTextArray()[1] === "<a href='#note/1'>This is also a test</a>")
    testFeedback(description);
  };
  testViewListTextArray();
})(this);

(function(exports) {
  function testViewListTextArrayMultiple() {
    var description = "Returns the list note's text in html - multiple notes"
    var view = new View(list_two_notes);
    assert.isTrue(view.listHtml() === "<ul><li><div><a href='#note/0'>This is a test</a></div></li><li><div><a href='#note/1'>This is also a test</a></div></li></ul>");
    testFeedback(description);
  };
  testViewListTextArrayMultiple();
})(this);

(function(exports) {
  function testViewListTextArraySingle() {
    var description = "Returns the list note's text in html - single note"
    var list = { getItems: function() { return  [note_1] } };
    var view = new View(list);
    assert.isTrue(view.listHtml() === "<ul><li><div><a href='#note/0'>This is a test</a></div></li></ul>");
    testFeedback(description);
  };
  testViewListTextArraySingle();
})(this);

(function(exports) {
  function testViewListTextArrayNone() {
    var description = "Returns the list note's text in html - no notes"
    var list = { getItems: function() { return  [] } };
    var view = new View(list);
    assert.isTrue(view.listHtml() === "<ul><li><div></div></li></ul>");
    testFeedback(description);
  };
  testViewListTextArrayNone();
})(this);

(function(exports) {
  function testViewListTextLimit() {
    var description = "Returns only the first 20 characters of a note's text"
    var list = { getItems: function() { return  [note_long] } };
    var view = new View(list);
    assert.isTrue(view.listHtml() === "<ul><li><div><a href='#note/0'>This is a test which</a></div></li></ul>");
    testFeedback(description);
  };
  testViewListTextLimit();
})(this);

(function(exports) {
  function testViewListTextLimit() {
    var description = "Returns only the first 20 characters of a note's text"
    var list = { getItems: function() { return  [note_long] } };
    var view = new View(list);
    assert.isTrue(view.listHtml() === "<ul><li><div><a href='#note/0'>This is a test which</a></div></li></ul>");
    testFeedback(description);
  };
  testViewListTextLimit();
})(this);
