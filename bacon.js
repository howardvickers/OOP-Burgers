var FoodItem = function(name, calories, vegan, glutenFree) {
    this.name = name
    this.calories = calories
    this.vegan = vegan
    this.glutenFree = glutenFree
}

FoodItem.prototype.stringify = function(){
    if (this.vegan){
        var veganStatus = ''
    } else {
        veganStatus = 'not'
    }
    if (this.glutenFree){
        var glutenStatus = ''
    } else {
        glutenStatus = 'not'
    }
    return `This food is called ${this.name} and has ${this.calories} calories is ${veganStatus} vegan and it is ${glutenStatus} gluten free`
}

var bacon = new FoodItem('bacon', 100, false, true)

console.log(bacon.stringify())