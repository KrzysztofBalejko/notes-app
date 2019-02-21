
(function(exports) {

  function Note(string = 'My favourite language is JavaScript') {
    this.text = string;
  };

  Note.prototype.note_text = function(){
    return this.text;
  };

  exports.Note = Note;

})(this);
