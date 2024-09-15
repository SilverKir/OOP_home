import { Magician } from "../Magician";

test('Test class Magician', () => {
    expect(new Magician("Himan")).toEqual({ "name": "Himan", "type": 'Magician', "health": 100, "level": 1, "attack": 10, "defence": 40 });
});

