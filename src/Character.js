export class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack;
        this.defence;

        this.checkName(name);
        this.checkType(type);

    };

    checkName(name) {
        if (name.length < 2 || name.length > 10) {
            throw new Error("Length of the name out of range (2-10)!");
        }
    };

    checkType(type) {
        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie']
        if (types.find((i) => i === type) === undefined) {
            throw new Error("Type is not defined!");
        }
    };

    levelUp() {
        if (this.health === 0) {
            throw new Error("You can't raise the level of a dead character!");
        }
        this.level += 1;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;
        this.health = 100;
    };

    damage(points) {
        this.health -= points * (1 - this.defence / 100)
        if (this.health < 0) {
            this.health = 0;
        };
    };
};
