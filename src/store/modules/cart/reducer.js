import produce from "immer";

const INITIAL_STATE = {
  items: [],
};

const cart = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CARD": {
        const { product } = action.payload;

        const productInCardIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCardIndex >= 0) {
          draft.items[productInCardIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }
        break;
      }
      default: {
        return state;
      }
    }
  });
};

export default cart;
