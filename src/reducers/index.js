import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } from "../actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    case EDIT_TODO:
      return state.map((todo, index) =>
        index === action.index ? { ...todo, text: action.edit } : todo
      );
    case DELETE_TODO:
      return state.filter((todo, index) => index !== action.index);

    default:
      return state;
  }
};

export default todos;
