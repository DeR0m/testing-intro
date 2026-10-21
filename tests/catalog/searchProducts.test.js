const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const search = searchProducts(products, 'Наушники');
    expect(search.map(p => p.id)).toEqual([1]);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const search = searchProducts(products, 'Чистый код');
    expect(search.map(p => p.id)).toEqual([6]);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const search = searchProducts(products, 'Настольная лампа');
    expect(search.map(p => p.id)).toEqual([4]);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const search = searchProducts(products, 'javascript');
    expect(search.map(p => p.id)).toEqual([3]);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const search = searchProducts(products, 'ЧЕХОЛ');
    expect(search.map(p => p.id)).toEqual([5]);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const search = searchProducts(products, 'наушники');
    expect(search.map(p => p.id)).toEqual([1]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const search = searchProducts(products, '');
    expect(search.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const search = searchProducts(products, '  ');
    expect(search.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const search = searchProducts(products, '\t\n');
    expect(search.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
