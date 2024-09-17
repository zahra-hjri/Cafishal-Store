const initialState = {
  count: 0,
  payload1: 5,
  payload2: 3,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + state.payload1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - state.payload2,
      };
    default:
      return state;
  }
};

export default counterReducer;
