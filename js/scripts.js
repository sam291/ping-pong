//User Logic
$(document).ready(function(){
  $("form#kuria").submit(function(event){
    event.preventDefault();

    myNumber = parseInt($("input#input1").val());
    $("#result").text(" ");
    react();
    $("input#input1").val();

  });
});

//Business Logic
var myNumber;
  function react( ){
  for(var i=1; i <= myNumber; i++){
  if ((i %3) ===0 && (i %5) ===0) {
      $("#result").append("<li>pingpong</li>");
  }else if ((i %5)===0){
      $("#result").append("<li>pong</li>");
  }
  else if ((i %3)===0){
      $("#result").append("<li>ping</li>");
  }
  else{
      $("#result").append("<li>"+ i +"</li>");
    }
  }
} 