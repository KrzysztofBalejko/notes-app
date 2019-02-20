(function(exports) {

  function NoteList() {
    this.array = new Array();
  };

  NoteList.prototype.return_array_items = function(){
    return this.array;
    // for (var i in this.array) {
    //   return this.array[i];
    // }
  };

  NoteList.prototype.create_note = function(note){
    this.array.push(note);
  };

  exports.NoteList = NoteList;

})(this);
