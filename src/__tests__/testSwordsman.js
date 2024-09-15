
import { Swordsman } from "../Swordsman";

test('Test class Swordsman', () => {
    expect(new Swordsman("Hitman1111")).toEqual({ "name": "Hitman1111", "type": 'Swordsman', "health": 100, "level": 1, "attack": 40, "defence": 10 });
});