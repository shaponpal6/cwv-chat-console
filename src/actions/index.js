let nextTodoId = 7
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const setCurrentPageFilter = filter => ({
  type: 'CURRENT_PAGE_FILTER',
  filter
});


export const currentPageFilters = {
  SHOW_NONE: 'SHOW_NONE',
  SHOW_DASHBOARD: 'SHOW_DASHBOARD',
  SHOW_WIDGET: 'SHOW_WIDGET',
  SHOW_WELCOME: 'SHOW_WELCOME'
}

export const chatStartButton = () => ({
  type: 'CHAT_START_BUTTON'
});

export const chatWelcomePage = () => ({
  type: 'CHAT_WELCOME_PAGE'
});