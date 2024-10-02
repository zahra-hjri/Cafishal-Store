const action = {
  type: "INCREASE",
};
const CounterReducer = (state, action) => {
  switch (action.type) {
    case "DECREASE":
      return { ...state, count: state + 1 };
    case "INCREASE":
      return { ...state, count: state - 1 };
    default:
      return state;
  }
};

const result = CounterReducer(12, action);
console.log(result);

const Ali = {
  name: "ali",
  age: 35,
  gender: "male",
};

const Hassan = { ...Ali, name: "hassan", lastName: "Rezayi" };

console.log(Hassan);
