
// $(function() {
//     $(".change-devoured").on("click", function(event) {
//       var id = $(this).data("id");
//       console.log(id);
//       // Send the PUT request.
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//       }).then(
//         function() {
//           console.log("here is your burger");
//           // Reload the page to get the updated list
//           location.reload();
//     })
// });
// });
$(function() {
$(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
  });
})

  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("[name=burger]").val().trim(),
      };
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        });
    });
});