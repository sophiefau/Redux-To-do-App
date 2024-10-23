/*
 * action types
 */

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

/*
 * action creators
 */

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  index,
});

export const editTodo = (edit) => ({
  type: EDIT_TODO,
  edit,
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  index,
});
