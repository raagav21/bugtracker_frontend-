export const initialState = {
  authUser: null,
  token: null,
  users: [],
  projects: [],
  issues: [],
  comments: [],
  filters: {},
  analytics: {},
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        authUser: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};