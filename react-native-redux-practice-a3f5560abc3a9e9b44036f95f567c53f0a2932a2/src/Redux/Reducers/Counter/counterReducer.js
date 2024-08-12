const initialState = {
  count: 0,
  length: 10,
  maxCount: 100,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;

// counterReducer({type: 'increment'});
// counterReducer({type: 'increment'});
// counterReducer({type: 'increment'});

// counterReducer({type: 'decrement'});
// counterReducer({type: 'decrement'});

// count = 1
