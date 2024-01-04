

  document.addEventListener("DOMContentLoaded", function() {
    // Get the current date and time
    var now = new Date();

    // Format the date as "YYYY-MM-DDTHH:mm"
    var formattedDate = now.toISOString().slice(0, 16);

    // Set the default value of the input field
    document.getElementById("dateInput").value = formattedDate;
  });
