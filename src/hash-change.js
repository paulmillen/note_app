(function(exports) {
  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    if (location.hash) showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    var id = Number(location.hash.split("/")[1]);
    return list.getItems()[id].getText();
  };

  function showNote(noteText) {
    document
    .getElementById("app")
    .innerHTML = noteText;
    pageFormatting.hideElement("textform");
    pageFormatting.showElement("backbutton");
  };
  exports.makeUrlChangeShowNoteForCurrentPage = makeUrlChangeShowNoteForCurrentPage;
})(this);
