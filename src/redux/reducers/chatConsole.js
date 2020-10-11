import { TOGGLE_TODO,ADD_MESSAGE } from "../actionTypes";

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
      const { id, content } = action.payload;
      return {
        ...state,
        messages: [
          ...state.messages,
           {
             id: id,
            text: content,
            completed: false,
          },
        ],
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
