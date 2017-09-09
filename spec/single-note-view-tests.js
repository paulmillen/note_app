(function(exports) {
  function singleNoteView() {
    var description = 'Single note view instantiates with a note model'
    var note = {};
    var singleNoteView = new SingleNoteView(note)
    assert.isTrue(singleNoteView.note === note);
    testFeedback(description);
  };
  singleNoteView();
})(this);

(function(exports) {
  function singleNoteViewHTML() {
    var description = 'Has a method that returns a string of HTML'
    var note = { getText: function() { return "This is a test" } };
    var singleNoteView = new SingleNoteView(note)
    assert.isTrue(singleNoteView.Html() === "<div>This is a test</div>");
    testFeedback(description);
  };
  singleNoteViewHTML();
})(this);
