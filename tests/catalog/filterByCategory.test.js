const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filter = filterByCategory(products, 'all');
    expect(filter.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filter = filterByCategory(products, undefined);
    expect(filter.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filter = filterByCategory(products, '');
    expect(filter.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const filter = filterByCategory(products, 'electronics');
    expect(filter.map(p => p.id)).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const filter = filterByCategory(products, 'books');
    expect(filter.map(p => p.id)).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const filter = filterByCategory(products, 'home');
    expect(filter.map(p => p.id)).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const filter = filterByCategory(products, 'clothes');
    expect(filter.map(p => p.id)).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const filter = filterByCategory(products, 'toys');
    expect(filter.map(p => p.id)).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    const filter = filterByCategory(products, 'sports');
    expect(filter.map(p => p.id)).toEqual([]);
  });
});
