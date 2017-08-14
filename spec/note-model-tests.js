(function(exports) {
  function testNoteText() {
    var note = new Note("This is a test");
    assert.isTrue(note.text === "This is a test");
  };
  exports.testNoteText = testNoteText();
})(this);
