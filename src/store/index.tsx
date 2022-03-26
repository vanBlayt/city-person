import React, { createContext, useReducer, Dispatch } from "react";

export interface IStoreState {
  login: boolean;
}

const initialState: IStoreState = {
  login: false
}

// create context
export const StoreContext = createContext<{ state: IStoreState, dispatch?: Dispatch<Action> }>({
  state: initialState,
})


type Action = { type: 'loginStatusChange', payload: IStoreState }

// reducer
const reducer = (state: IStoreState, action: Action) => {
  const { login } = action.payload;
  switch (action.type) {
    case 'loginStatusChange':
      return { ...state, login }
  }
}

// context provider
const Store: React.FC = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
export default Store