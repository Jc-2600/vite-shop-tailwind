/**
 * This function sum the prices of all products of a new order
 * @param {Array} products cartProducts: array of Objects
 * @returns {number} Total price of products
 */
export const totalPrice = (products) => {
  return products.reduce((acc, product) => acc + product.price, 0);
};

/**
 * This function obtains the current DateTime in the format 'DD-MM-YYYY HH:mm:ss'
 * @returns {string} Current DateTime in 'YYYY-MM-DD HH:mm:ss' format
 */

export const dateTime = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const hours = today.getHours().toString().padStart(2, "0");
  const minutes = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");

  const dateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

  return dateTime;
};
