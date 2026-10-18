function validateQuantity(quantity, stock) {
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new RangeError('Количество товара должно быть положительным целым числом.');
  }
  if (quantity > stock) {
    throw new RangeError(`Недостаточно товара на складе. Остаток на складе: ${stock} шт.`);
  }
}

function addToCart(cart, product, quantity) {
  const cartItem = cart.find((item) => item.id === product.id);
  const newQuantity = (cartItem?.quantity ?? 0) + quantity;

  validateQuantity(newQuantity, product.stock);

  if (cartItem) {
    return cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: newQuantity }
        : item
    );
  }
  return [...cart, { ...product, quantity }];
}

function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
