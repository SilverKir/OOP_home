import { Zombie } from "../Zombie";

test('Test class Zombie', () => {
    expect(new Zombie("Zombie")).toEqual({ "name": "Zombie", "type": 'Zombie', "health": 100, "level": 1, "attack": 40, "defence": 10 });
});

