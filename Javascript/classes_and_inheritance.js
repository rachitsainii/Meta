class Animal {
    constructor(color = "brown", energy = "100") {
        this.color = color;
        this.energy = energy;
    }

    isActive() {
        if(this.energy > 20) {
            this.energy -= 20;
            console.log(`The energy is currently dropping at: ${this.energy}.`);
        } else if (this.energy == 0){
            this.sleep();
        }
    }

    getColor() {
        console.log(this.color);
    }

    sleep() {
        this.energy += 20;
        console.log(`The energy is currently increasing at: ${this.energy}.`);
    }
}

class Cat extends Animal {
    constructor(sound = "meow", canJumpHigh = 'true', canClimbTrees = 'true', color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
        }
        makeSound(){
            console.log(this.sound);
     }
}

class Bird extends Animal {
    constructor(sound = "chirp", canFly = 'true', color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
        makeSound() {
            console.log(this.sound);
        }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "purr", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }

    

}