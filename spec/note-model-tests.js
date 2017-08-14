(function(exports) {
  function testNote() {
    var note = new Note("This is a test");

    if (note.text !== "This is a test") {
      throw new Error("Expected value not returned");
    } else {
      console.log("Success")
    };
  };
  exports.testNote = testNote();
})(this);
