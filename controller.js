list = new List();
list.addItem("This is a really long message.  Remember to not use any node frameworks....");
list.addItem("This is another long message and aother reminder that Sinatra is better than Express!!!");
list.addItem("Buy some milk and stuff for dinner blah blah blah blah blah");

var noteController = new NoteController(list);
noteController.html();

makeUrlChangeShowNoteForCurrentPage();
stopForm();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl(window.location));
};

function stopForm() {
  document
    .getElementById("text")
    .addEventListener("submit", function(event) { event.preventDefault() })
}

function getNoteFromUrl(location) {
  var id = Number(location.hash.split("/")[1]);
  return list.getItems()[id].getText();
};

function showNote(note) {
  document
    .getElementById("app")
    .innerHTML = note;
};
