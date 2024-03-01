// Set the date you were born
var birthDate = new Date("December 10, 2003 19:32:00");

// Update the counter every second
setInterval(function () {
  // Get the current date and time
  var now = new Date();

  // Calculate the difference between the current date and your birth date
  var diff = now.getTime() - birthDate.getTime();

  // Calculate the number of years, months, days, hours, minutes, and seconds
  var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  var months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update the counter with the new values
  document.getElementById("years").innerHTML = years;
  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
