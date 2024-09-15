import { Bowman } from "../Bowman";
import { Zombie } from "../Zombie";

test('Test damage', () => {
    const bowman = new Bowman("Himan");
    bowman.damage(100);
    expect(bowman.health).toBe(25);
});

test('Test max damage', () => {
    const zomb = new Zombie("Zombie");
    zomb.damage(200);
    expect(zomb.health).toBe(0);
});




