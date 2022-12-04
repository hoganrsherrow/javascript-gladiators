class Gladiator {
    // fields
    #name;
    #hp;
    #attack;
    #def;

    // constructor
    constructor(name, hp, attack, def) {
        this.#name = name;
        this.#hp = hp;
        this.#attack = attack;
        this.#def = def;
    }

    // getters
    getName() {
        console.log(`My name is ${this.#name}.`);
    }

    getHp() {
        console.log(`${this.#name}'s HP value is ${this.#hp}.`);
    }

    getAttack() {
        console.log(`${this.#name}'s attack value is ${this.#attack}.`);
    }

    getDef() {
        console.log(`${this.#name}'s defense value is ${this.#def}.`);
    }

    
    // draw method to animate the gladiator
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.arc(50, 50, Math.PI, 50, 0, true);
        // ctx.lineTo(100, 75);
        // ctx.lineTo(100, 25);

        ctx.fill();
    }
}