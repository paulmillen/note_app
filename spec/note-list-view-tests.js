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
    var note_1 = {
      getText: function() { return "This is a test" },
      getId: function() { return 0 }
    };
    var note_2 = {
      getText: function() { return "This is also a test"},
      getId: function() { return 1 }
    };
    var list = { getItems: function() { return  [note_1, note_2] } };
    var view = new View(list);
    var returnArray = view._listTextArray();
    assert.isTrue(returnArray[0] === "<a href='#note/0'>This is a test</a>");
    assert.isTrue(returnArray[1] === "<a href='#note/1'>This is also a test</a>");
    testFeedback(description);
  };
  exports.testViewListTextArray = testViewListTextArray();
})(this);

(function(exports) {
  function testViewListTextArrayMultiple() {
    var description = "Returns the list note's text in html - multiple notes"
    var note_1 = {
      getText: function() { return "This is a test" },
      getId: function() { return 0 }
    };
    var note_2 = {
      getText: function() { return "This is also a test"},
      getId: function() { return 1 }
    };
    var list = { getItems: function() { return  [note_1, note_2] } };
    var view = new View(list);
    assert.isTrue(view.listHtml() === "<ul><li><div><a href='#note/0'>This is a test</a></div></li><li><div><a href='#note/1'>This is also a test</a></div></li></ul>");
    testFeedback(description);
  };
  exports.testViewListTextArrayMultiple = testViewListTextArrayMultiple();
})(this);

(function(exports) {
  function testViewListTextArraySingle() {
    var description = "Returns the list note's text in html - single note"
    var note_1 = {
      getText: function() { return "This is a test" },
      getId: function() { return 0 }
    };
    var list = { getItems: function() { return  [note_1] } };
    var view = new View(list);
    assert.isTrue(view.listHtml() === "<ul><li><div><a href='#note/0'>This is a test</a></div></li></ul>");
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

(function(exports) {
  function testViewListTextLimit() {
    var description = "Returns only the first 20 characters of a note's text"
    var note_1 = {
      getText: function() { return "This is a test which has more than twenty characters" },
      getId: function() { return 0 }
    };
    var list = { getItems: function() { return  [note_1] } };
    var view = new View(list);
    assert.isTrue(view.listHtml() === "<ul><li><div><a href='#note/0'>This is a test which</a></div></li></ul>");
    testFeedback(description);
  };
  exports.testViewListTextLimit = testViewListTextLimit();
})(this);

(function(exports) {
  function testViewListTextLimit() {
    var description = "Returns only the first 20 characters of a note's text"
    var note_1 = {
      getText: function() { return "This is a test which has more than twenty characters" },
      getId: function() { return 0 }
     };
    var list = { getItems: function() { return  [note_1] } };
    var view = new View(list);
    assert.isTrue(view.listHtml() === "<ul><li><div><a href='#note/0'>This is a test which</a></div></li></ul>");
    testFeedback(description);
  };
  exports.testViewListTextLimit = testViewListTextLimit();
})(this);
