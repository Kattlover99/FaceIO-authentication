import React, { createContext, ReactNode, useReducer } from 'react';
import { userContextType } from '../@types/user';
import { initialState, reducer } from '../helpers/Reducers';

export const userContext = createContext<{
  state: userContextType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};

export default StateProvider;
