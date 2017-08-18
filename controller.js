var list = new List();

var noteController = new NoteController(list);

makeUrlChangeShowNoteForCurrentPage();
stopForm();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
  var id = Number(location.hash.split("/")[1]);
  return list.getItems()[id].getText();
};

function showNote(note) {
  document
    .getElementById("app")
    .innerHTML = note;
};

function stopForm() {
  document
    .getElementById("text")
    .addEventListener("submit", function(event) { event.preventDefault(), addNewNoteToList(event.path[0].elements[0].value) })
};

function addNewNoteToList(text) {
  if (text.length === 0) return;
  list.addItem(text);
  noteController.html();
  resetTextarea();
};

function resetTextarea() {
  document.getElementById("textarea").value = "";
};
