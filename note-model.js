
(function(exports) {

  function Note() {
    this.text = 'My favourite language is JavaScript';
  };

  exports.Note = Note;

  Note.prototype.note_text = function(){
    return this.text;
  };


})(this);
