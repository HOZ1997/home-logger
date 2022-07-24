const locationReducer = (state = [], action) => {
    console.log('locationReducer', action.payload);
    switch (action.type) {
       case 'SET_LOCATION':
          return action.payload;
        default:
        return state;
    }
  };

  // user will be on the redux state at:
  // state.user
  export default locationReducer;
