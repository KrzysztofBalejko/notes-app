function testMethodReturnsHtmlStringOfNote(){
  var note = new Note('Favourite drink: seltzer');
  var single_note = new SingleNoteView(note);
  assert.isTrue(single_note.note_model() == "<div>Favourite drink: seltzer</div>" );
};

testMethodReturnsHtmlStringOfNote()
