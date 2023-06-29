
class Car {
    constructor(name, color){
       
        this.name = name ;
        this.color = color ;
    }

    move(){
        console.log(this.name + " is moving...");
    }

    stop(){
        console.log("this " + this.color + " car is about to stop...")
    }
}

const benze = new Car("Benze", "Black");
const audi = new Car("Audi", "White")

console.log(audi);















