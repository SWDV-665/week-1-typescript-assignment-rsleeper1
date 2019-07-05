var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());
var groceryList = new Array();
var grocery1 = new Grocery("Milk", 2);
var grocery2 = new Grocery("Bread", 4);
var grocery3 = new Grocery("Eggs", 1);
groceryList.push(grocery1.name + "   " + grocery1.quantity, "   " + grocery2.name + "   " + grocery2.quantity, "   " + grocery3.name + "   " + grocery3.quantity);
console.log(groceryList);
document.write(groceryList.toString());
