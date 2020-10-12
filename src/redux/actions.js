import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  APP_ROUTER,
  ADD_MESSAGE,
  SET_CLIENTS_LIST,
  ADD_KNOWLEDGE,
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

export const setMenuState = (menu) => ({
  type: APP_ROUTER,
  payload: menu,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message
});
export const setClientsList = (content) => ({
  type: SET_CLIENTS_LIST,
  payload: content,
});

export const addKnowledge = (content) => ({
  type: ADD_KNOWLEDGE,
  payload: content,
});
