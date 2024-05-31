/**
 * This function calculate total price of a new order
 * @param {Array} products cartProduct: Array of objects
 * @returns {numeric} Total Price
 */

const totalPrice = products => products.reduce((sum, {price}) => sum + price, 0)

export default totalPrice;
