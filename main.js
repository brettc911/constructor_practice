//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (color, hungry, owner) {
  this.status = "normal"
  this.color = color
  this.hungry = hungry
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

const sadie = new Dog("black", false)
const moonshine = new Dog("black", true)
const atticus = new Dog()

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (pet, cool) {
  this.pet = pet => {
    pet.status = "happy"
  }
  this.feed = pet => {
    pet.hungry = false
  }
  this.cool = cool
}

// Instances of Human
// Needed: mason, julia

const mason = new Human(sadie, false)
const julia = new Human(moonshine, true)
