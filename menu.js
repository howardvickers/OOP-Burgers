
// create a variable as a function with parameters passed in; then define the parameters as this.parameter
var aPlate = function (name, des, price, ingred) {
    this.name = name
    this.des = des
    this.price = price
    this.ingred = ingred
}

// define the prototype with custom methods as functions.
aPlate.prototype.makeDesc = function(){
    return `${this.name} - usually described as "${this.des}" A great price at ${this.price} and features ${this.ingred}.`
}

// set variable as a new instance of the previous function with actual parameters passed in
var burger = new aPlate('Signature Burger', 'Simply the Best Burger in Town!', '$10.99', ['ground beef', ' bread', ' lettuce', ' tomato'])

// console logging just to see how this looks
console.log(burger.makeDesc())

// set another variable as a new instance of the function
var fries = new aPlate('Fries on the Side', 'worthy of their place on the plate!', '$2.99', ['real potato fries', ' greese'])

// console logging again
console.log(fries.makeDesc())

// another function for the menu (rather than for the individual plates)
var aMenu = function(name, items){
    this.name = name
    this.items = items
}

// defining the prototype method for the above function for the menu
// note the for-loop to iterate over the items and creates a new string which is returned
aMenu.prototype.makeFullMenu = function(){
    let desc = `${this.name} - it includes `
    for (item of this.items) {
        desc += item.makeDesc()
            desc += '\n'
    }
    return desc
}

// set another variable as a new instance of the function with an array for the items 
var burgerNfries = new aMenu('Burger and Fries', [burger, fries])

// console log to get the menu with the details of each plate within the menu
console.log(burgerNfries.makeFullMenu())