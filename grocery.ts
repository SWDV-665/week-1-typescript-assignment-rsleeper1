class Grocery{
    name: string;
    quantity: number;
    
    constructor(name: string, quantity: number){
        this.name = name;
        this.quantity = quantity;
    }
}

var groceryList = new Array();

let grocery1 = new Grocery("Milk", 2);
let grocery2 = new Grocery("Bread", 4);
let grocery3 = new Grocery("Eggs", 1);
groceryList.push(grocery1.name + "   " + grocery1.quantity, "   " + grocery2.name + "   " + grocery2.quantity, "   " + grocery3.name + "   " + grocery3.quantity);
console.log(groceryList);
document.write(groceryList.toString());

