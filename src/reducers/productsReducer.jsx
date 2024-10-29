export const productsReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, products: [...state.products] };

    default:
      state;
  }
};
