export const productsReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, products: [], totalPrice: 0 };

    case "DELETE_ITEM":
      return {
        ...state,
        products: state.products.filter((item) => item.id != action.payload),
      };

    default:
      state;
  }
};
