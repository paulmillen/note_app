(function(exports) {
  function noteController() {
    var description = 'It can be instantiated with a list object'
    var list = { addItem: function() {}, items: [] }
    var controller = new Controller(list);
    assert.isTrue(controller);
    testFeedback(description);
  };
  exports.noteController = noteController();
})(this);

(function(exports) {
  function noteControllerHtml() {
    var description = "adds HTML to element with id 'app'"
    var list = {
      addItem: function() {},
      getItems: function() { return [{ getText: function () {return "Test Message"} }] }
    };
    var controller = new Controller(list);
    controller.Html();
    assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Test Message</div></li></ul>");
    testFeedback(description);
  };
  exports.noteController = noteControllerHtml();
})(this);
