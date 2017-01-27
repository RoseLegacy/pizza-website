///////////////////////
//Back-end
///////////////////////
var toppings = [];
var size;
var delivery;

function pizza(toppings, size, delivery) {
  this.topping = [];
  this.size = size;
  this.delivered = delivery;
}

pizza.prototype.cost = function() {
  var cost = 10;

  if (this.size === "SM") {
    cost += 1;
  } else if (this.size === "M") {
    cost += 2;
  } else {
    cost += 3;
  }

  return cost;
}

function newPizza(toppings, size, delivery) {
  var pizza = new pizza();
}


///////////////////////
//Front-end
///////////////////////
$(function() {

  $("#pizzaToppings")

  $("#pizzaSubmit").submit(function() {
    newPizza()
  });






});
