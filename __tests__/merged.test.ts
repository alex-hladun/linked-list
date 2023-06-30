import { quickSort } from '../src/merged.js';

describe('Quicksort test', () => {
  it('correctly sorts', () => {
    const items = [5, 3, 7, 6, 2, 9];
    const items2 = [5, 66, 3, 22, 1];
    const combined = [...items, ...items2];
    const sorted = quickSort(combined, 0, combined.length - 1);

    expect(sorted).toStrictEqual([1, 2, 3, 3, 5, 5, 6, 7, 9, 22, 66]);
  });
});
