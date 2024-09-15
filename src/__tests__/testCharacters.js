import { Character } from '../Character.js'

test('Test Character name', () => {
    expect(() => { new Character("e", "Bowman") }).toThrow("Length of the name out of range (2-10)!");
});

test('Test Character name', () => {
    expect(() => { new Character("e0123456789", "Bowman") }).toThrow("Length of the name out of range (2-10)!");
});

test('Test Character type', () => {
    expect(() => { new Character("eeee", "1111") }).toThrow("Type is not defined!");
});

test('Test class Character', () => {
    expect(new Character("eeee", "Swordsman")).toEqual({ "name": "eeee", "type": "Swordsman", "health": 100, "level": 1 });
});

