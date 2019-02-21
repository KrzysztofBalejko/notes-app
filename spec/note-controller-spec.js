function testNoteControllerCanBeInstantiated(){
  var controller = new NoteController();
  assert.isTrue(controller = new NoteController())
};
testNoteControllerCanBeInstantiated()

function testNoteControllerFunctionality(){
  var notelist = new NoteList();
  var note = new Note('Favourite drink: seltzer');
  var controller = new NoteController(notelist, note);
  var view = new NoteListView(notelist);
  assert.isTrue(view.html_string(notelist) == "<ul><li><div>" + "Favourite drink: seltzer" + "</div></li></ul>" );
};
testNoteControllerFunctionality();


function TestHTMLlist(){

  var notelist = new NoteList();
  var note = new Note('Favourite drink: seltzer');
  var controller = new NoteController(notelist, note);
  var view = new NoteListView(notelist);

  controller.create_html = function(){
   var doc = document.createElement('section')
   doc.innerHTML = "<div id='app'>hello</div>"
   return doc
  }

  assert.isTrue(controller.insert_html(view, notelist) === "<ul><li><div>Favourite drink: seltzer</div></li></ul>")

}

TestHTMLlist();

//
//
// function testMethodGetsHtmlFromNoteListViewAndInsertsItIntoAppElement(){
//
//
// };
