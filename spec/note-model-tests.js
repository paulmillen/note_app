(function(exports) {
  function testNoteText() {
    var description = "Note has a text variable that stores instantiated argument"
    var note = new Note("This is a test");
    assert.isTrue(note.getText() === "This is a test");
    testFeedback(description);
  };
  exports.testNoteText = testNoteText();
})(this);
