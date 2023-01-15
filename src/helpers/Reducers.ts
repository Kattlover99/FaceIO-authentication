import { userContextType, Action } from '../@types/user';


//the initial state of the user
export const initialState = {
  user: null,
};


//the action we are going to take when we login that is set the user
export const actionTypes = {
  SET_USER: 'SET_USER',
};


//the reducer function note the parameter type annotations
export const reducer = (state: userContextType, action: Action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
