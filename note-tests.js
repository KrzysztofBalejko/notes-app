(function(exports) {

  function testNoteForString() {
    var note = new Note();
    assert.isTrue('My favourite language is JavaScript')
  };
  testNoteForString();

  function testForMethodReturningString(){
    var note = new Note();
    if (note.note_text() !== 'My favourite language is JavaScript'){
      throw new Error("Not returning expected string");
    }
  };
  testForMethodReturningString();

  function testNoteListToReturnArray(){
    var note = new NoteList();
    assert.isTrue([])
  };
  testNoteListToReturnArray();

  function testMethodReturningArrayElements(){
    var note = new NoteList();
    note.array = [2];
    if (note.array[0] == 2 && note.return_array_items() == 2 ) {
      console.log('true');
    } else {
      console.log('false');
    };
  };
  testMethodReturningArrayElements();

  function 



})(this);
