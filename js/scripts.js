///////////////////////
//Back-end
///////////////////////

function Pizza(size) {
  this.pizzasize = size;
  this.topping = [];
}

Pizza.prototype.cost = function() {
  var cost = 10;

  if (this.pizzasize === "SM") {
    cost += 1;
  } else if (this.pizzasize === "M") {
    cost += 2;
  } else {
    cost += 3;
  }

  if (this.topping.length === 0) {
    cost *= 1;
  } else {
    cost += this.topping.length;
  }

  return cost;
}



///////////////////////
//Front-end
///////////////////////
$(function() {

  $("#submit").click(function(event) {
    event.preventDefault();

    var pizzaSize = $("form#pizzaSize").val();
    var newPizza = new Pizza(pizzaSize);

    $.each($("input[name='toppings']:checked"), function() {
      newPizza.topping.push($(this).val());
    });
    $("#output").append("<p>output " + newPizza + this.topping + pizzaSize + "</p>")
  });
});
