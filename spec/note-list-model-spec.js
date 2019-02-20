function testNoteListToReturnArray(){
  var note = new NoteList();
  assert.isTrue([])
};
testNoteListToReturnArray();

// function testMethodReturningArrayElements(){
//
//   var note = new NoteList();
//   note.array = [2];
//   if (note.array[0] == 2 && note.return_array_items() == 2 ) {
//     console.log('true');
//   } else {
//     console.log('false');
//   };
// };
// testMethodReturningArrayElements();

function testMethodReturningArrayElements(){

  var note = new NoteList();
  note.array = [2];
  assert.isTrue(note.return_array_items() == 2);
};
testMethodReturningArrayElements();
