var transform = function(input){
  // debugger;
  var crypto = "";
  var row =  Math.ceil(Math.sqrt(input.length));
  var col = Math.floor(Math.sqrt(input.length));
  var square = row * col;
  alert(square);
};


$(document).ready(function(){
  $("#cryptosquare-form").submit(function(event){
    event.preventDefault();
    var onlyLetters = /[\W_]/g;
    var userInput = $("#sentence-input").val().toLowerCase();
    userInput = userInput.replace(onlyLetters, '');
    var crypto = transform(userInput);
    alert(crypto);
  });
});
