
import { Daemon } from "../Daemon";

test('Test class Daemon', () => {
    expect(new Daemon("Hitman1111")).toEqual({ "name": "Hitman1111", "type": 'Daemon', "health": 100, "level": 1, "attack": 10, "defence": 40 });
});