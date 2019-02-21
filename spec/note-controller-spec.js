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
   console.log(doc);
   doc.innerHTML = "<div id='app'>hello</div>"
   // console.log(doc.innerHTML);
   return doc
  }

  console.log(note);
  console.log(notelist);
  console.log(controller);
  console.log(view);


  // assert.isTrue(controller.insert_html(view, notelist) === "<ul><div><li>Favourite drink: seltzer</li></div></ul>")

 }

 TestHTMLlist();

//
//
// function testMethodGetsHtmlFromNoteListViewAndInsertsItIntoAppElement(){
//
//
// };
