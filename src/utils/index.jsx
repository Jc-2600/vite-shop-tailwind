
/**
 * This function sum the prices of all products of a new order
 * @param {Array} products cartProducts: array of Objects
 * @returns {number} Total price of products
 */
export  const totalPrice = (products) =>{
    return products.reduce((acc, product) => acc + product.price, 0)
}