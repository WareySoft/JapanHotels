function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 8000);
}


$(document).ready(myFunction());



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

 $(document).keydown(function(e){
    if(e.keyCode == 13){
      if(x%2 == 0){
        audio.play();
        
      }else{
        audio.pause();
      }
      x++;
    }

  });

 




const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.squared');

    if (entry.isIntersecting) {
      square.classList.add('square-animation');
	  return; // if we added the class, exit the function
    }

    // // We're not intersecting, so remove the class!
    // square.classList.remove('square-animation');
  });
});

observer.observe(document.querySelector('.square-wrapper1'));
observer.observe(document.querySelector('.square-wrapper2'));
observer.observe(document.querySelector('.square-wrapper3'));
observer.observe(document.querySelector('.review1'));
observer.observe(document.querySelector('#wave1'));
observer.observe(document.querySelector('#wave2'));


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.imaged');

    if (entry.isIntersecting) {
      square.classList.add('image-animation');
	  return; // if we added the class, exit the function
    }

    // // We're not intersecting, so remove the class!
    // square.classList.remove('image-animation');
  });
});

observer2.observe(document.querySelector('#images'));
observer2.observe(document.querySelector('#player'));





const observer3 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('square-animation2');
    }
  });
});

observer3.observe(document.querySelector('#wave2'));
observer3.observe(document.querySelector('.findhotelt'));





observer3.observe(document.querySelector('#navt1'));
observer3.observe(document.querySelector('#navt2'));
observer3.observe(document.querySelector('#navt3'));
observer3.observe(document.querySelector('#navt4'));
observer3.observe(document.querySelector('#player'));
observer3.observe(document.querySelector('.textcity'));
observer3.observe(document.querySelector('.directions'));