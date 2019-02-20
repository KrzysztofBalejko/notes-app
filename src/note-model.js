
(function(exports) {

  function Note(string = 'My favourite language is JavaScript') {
    this.text = string;
  };

  exports.Note = Note;

  Note.prototype.note_text = function(){
    return this.text;
  };


})(this);
