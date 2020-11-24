export function addProductToCart(product) {
  return {
    type: "ADD_PRODUCT_TO_CARD",
    payload: {
      product,
    },
  };
}
