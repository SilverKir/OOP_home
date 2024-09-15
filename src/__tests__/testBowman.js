import { Bowman } from "../Bowman";

test('Test class Bowman', () => {
    expect(new Bowman("Himan")).toEqual({ "name": "Himan", "type": 'Bowman', "health": 100, "level": 1, "attack": 25, "defence": 25 });
});

