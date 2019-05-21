const bandReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_BAND':
      return [action.band, ...state]
    case 'REMOVE_BAND':
      return [...state.slice(0, action.bandIndex),
        ...state.slice(action.bandIndex + 1)]
    default:
      return state
  };
};

export default bandReducer;
