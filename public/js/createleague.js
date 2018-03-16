// added by Venkat

$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data1").then(function(data) {
      console.log("This is what I want to add: ", data.email);
      $(".created-name").text(data.email);
    });
  });