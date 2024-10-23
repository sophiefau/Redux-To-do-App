import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";
import { createStore } from "redux";
import { addTodo, toggleTodo, editTodo, deleteTodo } from "./actions";
import todos from "./reducers";
import "./index.scss";

const store = createStore(todos);

console.log("Initial State", store.getState());
store.dispatch(addTodo("Dispatch my first action"));

store.dispatch(addTodo("Created second todo"));
console.log("Created second todo", store.getState());

store.dispatch(toggleTodo(0));
console.log("State after toggling first todo", store.getState());

store.dispatch(deleteTodo(1));
console.log("Todo deleted!", store.getState());

function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
