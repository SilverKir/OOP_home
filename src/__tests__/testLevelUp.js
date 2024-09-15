import { Bowman } from "../Bowman";
import { Zombie } from "../Zombie";

test('Test LevelUp', () => {
    const bowman = new Bowman("Himan");
    bowman.levelUp();
    expect(bowman).toEqual({ "name": "Himan", "type": 'Bowman', "health": 100, "level": 2, "attack": 30, "defence": 30 });
});

test('Test LevelUp with 0 health', () => {
    const zomb = new Zombie("Zombie");
    zomb.health = 0;
    expect(() => { zomb.levelUp(); }).toThrow("You can't raise the level of a dead character!");
});




