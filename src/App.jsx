import store from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./components/Counter/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <div className="w-full h-screen bg-blue-200">
        <Counter>{console.log(store)}</Counter>
      </div>
    </Provider>
  );
};

export default App;
