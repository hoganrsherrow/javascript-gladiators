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

    
    // draw method to draw the gladiator
    draw(ctx) {
        ctx.beginPath();

        // draw the head
        ctx.arc(50, 50, Math.PI * 5, Math.PI * 2, 0, true);

        // draw the body
        ctx.moveTo(50, 50 + Math.PI * 5);
        ctx.lineTo(50, 100 + Math.PI * 5);

        // draw the arms
        ctx.moveTo(50, 75 + Math.PI * 5);
        ctx.lineTo(70, 60 + Math.PI * 5);
        ctx.moveTo(50, 75 + Math.PI * 5);
        ctx.lineTo(30, 60 + Math.PI * 5);

        // draw the legs
        ctx.moveTo(50, 100 + Math.PI * 5);
        ctx.lineTo(70, 115 + Math.PI * 5);
        ctx.moveTo(50, 100 + Math.PI * 5);
        ctx.lineTo(30, 115 + Math.PI * 5);

        ctx.stroke();
    }
}