document.addEventListener("DOMContentLoaded", function() {
    // Get the current date and time
    var now = new Date();
  
    // Format the date as "YYYY-MM-DD"
    var formattedDate = now.toISOString().slice(0, 10);
  
    // Format the time as "HH:mm"
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var formattedTime = hours + ":" + minutes;
  
    // Concatenate date and time in the correct format for datetime-local input
    var formattedDateTime = formattedDate + "T" + formattedTime;
  
    // Set the default value of the input field
    document.getElementById("dateInput").value = formattedDateTime;
  });
  