import { Undead } from "../Undead";

test('Test class Undead', () => {
    expect(new Undead("Undead")).toEqual({ "name": "Undead", "type": 'Undead', "health": 100, "level": 1, "attack": 25, "defence": 25 });
});

