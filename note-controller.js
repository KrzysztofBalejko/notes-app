(function(exports){

function NoteController(notelist = new NoteList(), note){
  this.notelist = notelist.create_note(note)
};

NoteController.prototype.insert_html = function(view, notelist){
  return this.create_html.innerHTML = view.html_string(notelist);
};

NoteController.prototype.create_html = function(){
  var id = document.getElementById('app');
  return id;
};


exports.NoteController = NoteController;

})(this);





// x = document.getElementById('app')
// console.log(x);
//
// x.innerText = 'howdy'
