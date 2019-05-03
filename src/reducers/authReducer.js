const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: null,
  user: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
