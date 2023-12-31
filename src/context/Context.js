import {  createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = { 
    user:JSON.parse(localStorage.getItem("user")),
    isFetching:false,
    error: false,
};

export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({Children})=>{
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
    
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user));
    },[state.user])

    return
    <ContextProvider 
      value={{
        user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch,
      }}
    >
        {Children}
    </ContextProvider>

}