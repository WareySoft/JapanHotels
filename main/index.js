var audio = new Audio('eternal.mp3');

var x = 0;
var animation = document.querySelector("div");

$("#player").click(function() {
  if(x%2 == 0){
  	audio.play();
  	animation.id = "leaves";
  }else{
  	audio.pause();
  	animation.id = "";
  }
  x++;
});

