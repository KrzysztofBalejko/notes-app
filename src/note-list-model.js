(function(exports) {

  function NoteList() {
    this.array = new Array();
  };

  exports.NoteList = NoteList;

  NoteList.prototype.return_array_items = function(){
    for (var i in this.array) {
      return this.array[i];
    }
  };

  NoteList.prototype.create_note = function(note){
    this.array.push(note);
  };


})(this);
