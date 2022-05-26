const sum =require("./sum");

test('a + b es igual a 3', () => {
     expect(sum(1, 2)).toBe(3);
 })