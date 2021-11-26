// import Lazy from './index';

// describe('Lazy class', () => {
//   let computation;
//   beforeEach(() => {
//     computation = new Lazy();
//   });

//   test('it should have an add method', () => {
//     expect(computation).toHaveProperty('add');
//   });

//   test('it should have an evaluate method', () => {
//     expect(computation).toHaveProperty('evaluate');
//   });

//   test('it returns an array', () => {
//     const result = computation.add((a) => a * 2).evaluate([2]);
//     expect(Array.isArray(result)).toBe(true);
//   });

//   test('it returns the expected values', () => {
//     const result = computation.add((a) => a * 2)
//       .add((a, b) => a + b, 1)
//       .evaluate([1, 2, 3]);
//     expect(result).toStrictEqual([3, 5, 7]);
//   });
// });
