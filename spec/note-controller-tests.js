 (function(exports) {
  function noteControllerNew() {
    var description = 'It can be instantiated with a list object'
    var list = { addItem: function() {}, items: [] }
    var noteController = new NoteController(list);
    assert.isTrue(noteController);
    testFeedback(description);
  };
  noteControllerNew();
})(this);

(function(exports) {
  function noteControllerHtml() {
    var description = "adds HTML to element with id 'app'"
    var list = {
      addItem: function() {},
      getItems: function() { return [ { getText: function() { return "Test Message" }, getId: function() { return 0 } }] }
    };
    var noteController = new NoteController(list);
    noteController.html();
    assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><div><a href="#note/0">Test Message</a></div></li></ul>');
    testFeedback(description);
    document.getElementById("app").innerHTML = ""
  };
  noteControllerHtml();
})(this);
