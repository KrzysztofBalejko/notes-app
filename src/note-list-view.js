(function(exports) {

function NoteListView(notelist){
  this.notelist = notelist;
};

NoteListView.prototype.html_string = function(notelist){

  var array = notelist.return_array_items();
  var new_array = [];
  for (var i in array) {
    new_array.push(`<li><div>${array[i].text.slice(0,20)}</div></li>`);
  }
  new_array.unshift("<ul>");
  new_array.push("</ul>");
  return new_array.join("");
};



exports.NoteListView = NoteListView;

})(this);
