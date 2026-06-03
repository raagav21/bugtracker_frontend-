import { createContext, useReducer, useEffect } from "react";
import { initialState, appReducer } from "./reducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    appReducer,
    initialState
  );

  useEffect(() => {
    window.appState = state;
  }, [state]);

  return (
    <AppContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};