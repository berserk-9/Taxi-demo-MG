document.addEventListener("DOMContentLoaded", function() {
    // Get the current date and time
    var now = new Date();
  
    var formattedDate = now.toISOString().slice(0, 10);
  
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var formattedTime = hours + ":" + minutes;
  
   
    var formattedDateTime = formattedDate + "T" + formattedTime;
  
    
    document.getElementById("dateInput").value = formattedDateTime;
  });
  

  // top
// button on top
let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
