import { TOGGLE_TODO,ADD_MESSAGE, SET_CLIENTS_LIST } from "../actionTypes";

const initialState = {
  clientId: "111",
  messages: [],
  clientsList: [],
  allIds: [],
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload,
        ],
      };
    }
    case SET_CLIENTS_LIST: {
      return {
        ...state,
        clientsList: action.payload,
      };
    }
    
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
}
