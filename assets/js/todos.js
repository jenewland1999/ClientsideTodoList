// Toggle todo item
$("#todoList").on("click", ".todoItem", function() {
  $(this).toggleClass("checked");
});

// Remove todo item
$("#todoList").on("click", ".todoItem > span", function(e) {
  $(this).parent().fadeOut(300, function() {
    $(this).remove();
    checkForTodos();
  });
  e.stopPropagation();
});

// Add new todo item
$("#todoInput").on("keypress", function(e) {
  if (e.which === 13) {
    var inputText = $(this).val();
    $(this).val("");
    $("#todoList").append(`<li class="todoItem"><span><i class="fas fa-trash-alt"></i></span>${inputText}</li>`);
    checkForTodos();
  }
})

// Toggle form visibility
$("#toggleForm").on("click", function() {
  $("#todoInput").parent().slideToggle(function() {
    if ($("svg").attr("data-icon") === "plus") {
      $("#toggleForm").html("<i class=\"fas fa-minus\"></i>");
    } else {
      $("#toggleForm").html("<i class=\"fas fa-plus\"></i>");
    }
  });
})

function checkForTodos() {
  if ($("#todoList").children().length === 0) {
    $("#todoList").append("<p>You currently have no todos.</p>");
  } else {
    $("#todoList").find("p").remove();
  }
}

checkForTodos();