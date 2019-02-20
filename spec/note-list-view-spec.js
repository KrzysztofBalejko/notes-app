function testNoteListViewTakesNoteList(){
  var notelist = new NoteList();
  var view = new NoteListView(notelist);
  assert.isTrue(view.notelist === notelist);
}
testNoteForString();

function testMethodReturningHTML(){
  var notelist = new NoteList();

  var note1 = new Note('Favourite food: pesto');
  var note2 = new Note('Favourite drink: seltzer');
  notelist.create_note(note1);
  notelist.create_note(note2);

  var view = new NoteListView(notelist);
  assert.isTrue(view.html_string(notelist) === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>");
};
testMethodReturningHTML();

function testHandlesNoteListThatHasNoNotes(){
  var notelist = new NoteList();
  var view = new NoteListView(notelist);
  assert.isTrue(view.html_string(notelist) === "<ul></ul>");
};
testHandlesNoteListThatHasNoNotes()
