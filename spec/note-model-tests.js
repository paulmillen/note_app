(function(exports) {
  function testNoteText() {
    var description = "Note has a text variable that stores instantiated argument"
    var note = new Note("This is a test");
    assert.isTrue(note.text === "This is a test");
    testFeedback(description);
  };
  exports.testNoteText = testNoteText();
})(this);
