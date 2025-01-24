//python -m http.server
let animalPopulation = 0;
function run() {
  let tigger = new Tiger("Tigger");
  tigger.eat("meat");
  let pooh = new Bear("Pooh");
  pooh.eat("fish");
  pooh.eat("meat");
  let rarity = new Unicorn("Rarity");
  rarity.eat("marshmallows");
  let gemma = new Giraffe("Gemma");
  gemma.eat("meat");
  gemma.eat("leaves");
  let stinger = new Bee("Stinger");
  stinger.eat("ice cream");
  stinger.eat("pollen");
  let animals = [tigger, pooh, rarity, gemma, stinger];
  let zoebot = new Zookeeper("Zoebot");
  zoebot.feedAnimals(animals, "salad");
  Animal.getPopulation();
}

class Animal {
  constructor(name,favoriteFood) {
    this.name = name;
    this.favoriteFood = favoriteFood;
    animalPopulation++;
  }
  static getPopulation() {
    console.log(animal.getPopulation);
    return animalPopulation;
  }  
  sleep() {
    console.log(this.name + " sleeps for 8 hours");
  }
  eat(food){
    console.log(this.name + " eats " + food);
    if (food == this.favoriteFood){
      console.log("YUM!!! " + this.name + " wants more " + food);
    }else{
      console.log(this.name + " sleeps for 8 hours");
    }
  }
}

class Tiger extends Animal {
  constructor(name) {
    super(name, "meat");
  }
}

class Bear extends Animal {
  constructor(name) {
    super(name, "fish");
    }
  sleep(){
      console.log(this.name + " hibernates for 4 months");
  }
}

class Unicorn extends Animal {
  constructor(name) {
    super(name, "marshmallows");
    }
  sleep(){
      console.log(this.name + " sleeps in a cloud");
  }
}

class Giraffe extends Animal {
  constructor(name) {
    super(name, "leaves");
    }
    eat(food){
      console.log(this.name + " eats " + food);
      if (food == this.favoriteFood){
        console.log("YUM!!! " + this.name + " wants more " + food);
        console.log(this.name + " sleeps for 8 hours");
      }else{
        console.log("YUCK!!! " + this.name + " will not eat "+ food);
      }
    }
}
class Bee extends Animal {
  constructor(name) {
    super(name, "pollen");
    }
    eat(food){
      console.log(this.name + " eats " + food);
      if (food == this.favoriteFood){
        console.log("YUM!!! " + this.name + " wants more " + food);
        console.log(this.name + " never sleeps");
      }else{
        console.log("YUCK!!! " + this.name + " will not eat "+ food);
      }
    }
}

class Zookeeper {
  constructor(name) {
    this.name = name;
  }
  feedAnimals(animals, food){
    console.log(this.name + " is feeding "+food+ " to "+animals.length+ " of "+animalPopulation+ " total animals")
    animals.array.forEach(animals =>{
      animals.eat(food);
    });
  }
}