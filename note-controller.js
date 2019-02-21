(function(exports){

function NoteController(notelist = new NoteList(), note){
  this.notelist = notelist.create_note(note)
  // this.view = new NoteListView(notelist)
};

NoteController.prototype.insert_html = function(view, notelist){

  var id = document.getElementById('app');
  id.innerHTML = view.html_string(notelist);

};


exports.NoteController = NoteController;

})(this);





// x = document.getElementById('app')
// console.log(x);
//
// x.innerText = 'howdy'
