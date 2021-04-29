function data(state = {}, action) {
  switch (action.type) {
    case "bla":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}

export default data;
