import React,{createContext, useContext, useReducer } from 'react';
import reducer from "./reducer"

export const StateContext = createContext(null);

// Add intial state of store
const initialState = {
  name:'chand'
};

// const[count, dispatch] = useReducer(reducer, initialState) countState:count, countDispatch:dispatch

export const StateProvider  = ({ children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>);

 

export const useStateValue = () => useContext(StateContext);