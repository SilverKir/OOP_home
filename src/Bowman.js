import { Character } from "./Character";
export class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman');
        this.attack = 25;
        this.defence = 25;

    }
    levelUp() {
        super.levelUp();
    }

}