  function testNoteForString(){
    var note = new Note();
    assert.isTrue('My favourite language is JavaScript');
  }
  testNoteForString();

  function testForMethodReturningString(){
    var note = new Note();
    if (note.note_text() !== 'My favourite language is JavaScript'){
      throw new Error("Not returning expected string");
    }
  }
  testForMethodReturningString();
