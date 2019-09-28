$(".create-form").on("submit", function(event) {
  event.preventDefault();
  var newBurger = {
    burger_name: $("#burger-name")
      .val()
      .trim()
  };

  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(function() {
    location.reload();
  });
});

$(".devour").on("click", function(event) {
  var id = $(this).data("id");

  $.ajax("/api/burgers/" + id, {
    type: "PUT"
  }).then(function() {
    location.reload();
  });
});

$(document).on("submit", "#addBurgerForm", function() {
  event.preventDefault();
  $.ajax({
    url: "/api/addnewburger",
    method: "POST",
    data: {
      burgerName: $("#burgerName")
        .val()
        .trim()
    }
  }).then(function(response) {
    console.log(response);
  });
  window.location.replace("/api/allburgers");
});

// {{!-- Devour A Burger --}}

$(document).on("click", ".devourButton", function() {
  event.preventDefault();
  let currentStatus = $(this).attr("data-is-devoured");
  let newStatus;
  if (currentStatus === "1") {
    newStatus = false;
  } else if (currentStatus === "0") {
    newStatus = true;
  }
  $.ajax({
    url: "/api/changedevouredstatus",
    method: "PUT",
    data: {
      id: $(this).attr("data-db-id"),
      newdevouredstatus: newStatus
    }
  }).then(function(response) {
    console.log(response);
  });
  window.location.replace("/api/allburgers");
});

// {{!-- Trash A Burger --}}

$(document).on("click", ".trashButton", function() {
  $.ajax({
    url: "/api/deleteaburger",
    method: "DELETE",
    data: {
      id: $(this).attr("data-db-id")
    }
  }).then(function(response) {
    console.log(response);
  });
  window.location.replace("/api/allburgers");
});
