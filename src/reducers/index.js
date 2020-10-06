const OnOff = (state, key) => {
  switch (key) {
    case 'showWidget':
        return {
            ...state,
            showWidget: !state.showWidget,
          };
    case 'chatWidget':
        return {
            ...state,
            chatWidget: !state.chatWidget,
          };
    case 'welcomeBox':
        return {
            ...state,
            welcomeBox: !state.welcomeBox,
          };
    default:
      return state;
  }
};
const Reducer = (state, action) => {
  switch (action.type) {
    case 'ON_OFF':
      return OnOff(state, action.payload);
    case 'SET_ROUTE':
      return {
        ...state,
        chatRoute: action.payload,
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      };
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      };
    case 'REMOVE_POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
