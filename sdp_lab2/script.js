var Animal = function (name) {
  this.name = name

  this.info = function () {
    console.log('Animal: ' + this.name)
  }
}

var DecoratedAnimal = function (animal, height, age) {
  this.animal = animal
  this.name = animal.name
  this.height = height
  this.age = age

  this.info = function () {
    console.log(
      'Decorated Animal: ' + this.name + ', ' + this.height + ', ' + this.age
    )
  }
}

function run() {
  var animal = new Animal('Cat')
  animal.info()

  var decorated = new DecoratedAnimal(animal, '2m', 20)
  decorated.info()
}

run()
