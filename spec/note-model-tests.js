(function(exports) {
  function testNoteText() {
    var description = "Note has a text variable that stores instantiated argument"
    var note = new Note("This is a test");
    assert.isTrue(note.getText() === "This is a test");
    testFeedback(description);
  };
  testNoteText();
})(this);

(function(exports) {
  function testNoteId() {
    var description = "Notes have serialized ID's"
    var note_1 = new Note();
    var note_2 = new Note();
    var note_3 = new Note();
    assert.isTrue(note_1.getId() === 1);
    assert.isTrue(note_2.getId() === 2);
    assert.isTrue(note_3.getId() === 3);
    testFeedback(description);
  };
  testNoteId();
})(this);
