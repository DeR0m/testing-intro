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

function changeQuantity(cart, productId, quantity) {
  const cartItem = cart.find((item) => item.id === productId);

  if (!cartItem) return cart;

  validateQuantity(quantity, cartItem.stock);

  return cart.map((item) =>
    item.id === productId ? { ...item, quantity } : item
  );
}

function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((total, item) => total + item.quantity * item.price, 0);
}

function calculateOrderTotal(cart, promoCode) {
  const subtotal = calculateCartSubtotal(cart);
  let discount = 0;

  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = Math.round(subtotal * 0.1);
  }

  const discountedSubtotal = subtotal - discount;

  const delivery = discountedSubtotal >= 50000 ? 0 : 30000;

  const total = discountedSubtotal + delivery;

  return {
    subtotal,
    discount,
    delivery,
    total,
  }
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
