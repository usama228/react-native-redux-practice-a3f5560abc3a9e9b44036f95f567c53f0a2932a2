const initialState = {
  uid: '',
  userName: '',
  isUserLogin: false,
  hobby: [],
  moreData: {
    city: '',
  },
};

const userReducer = (initialState, action) => {
  switch (action.type) {
    case 'setId':
      return {
        ...initialState,
        uid: action.id,
      };

    case 'setUserName':
      return {
        ...initialState,
        userName: action.uname,
      };

    case 'setUserData':
      const {userName, uid} = action.data;
      return {
        ...initialState,
        uid: uid,
        userName: userName,
      };

    case 'setIsUserLogin':
      return {
        ...initialState,
        isUserLogin: action.isUserAuthenticate,
      };

    default:
      return initialState;
  }
};

export default userReducer;
// userReducer({type: 'setId', id: 1});

// userReducer({type: 'setUserName', uname: 'Haresh'});

// userReducer({type: 'setUserData', data: {uid: 1, userName: 'Haresh'}});

// userReducer({type: 'setIsUserLogin', isUserAuthenticate: true});
