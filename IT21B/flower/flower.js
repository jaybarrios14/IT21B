class Flower {
    constructor(name, color, bloomSeason, isFragrant) {
        this.name = name;
        this.color = color;
        this.bloomSeason = bloomSeason;
        this.isFragrant = isFragrant;
    }

    bloom() {
        console.log(`The ${this.name} blooms in ${this.bloomSeason}.`);
    }

    fragrance() {
        if (this.isFragrant) {
            console.log(`The ${this.name} is fragrant.`);
        } else {
            console.log(`The ${this.name} is not fragrant.`);
        }
    }

    colorDisplay() {
        console.log(`The ${this.name} has a beautiful ${this.color} color.`);
    }
}

const rose = new Flower("Rose", "red", "Spring", true);

rose.bloom();
rose.fragrance();
rose.colorDisplay();
