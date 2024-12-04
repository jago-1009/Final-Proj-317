"use client";
import { Children, createContext, useContext, useState } from "react";

const dataContext = createContext({});

export function dataProvider({children}) {
    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
      }
      const contextValue = {
        capitalizeFirstLetter}
    return (
        <dataContext.Provider value={contextValue}>
            {children}
        </dataContext.Provider>
    )
}
export default function useGetStates() {
    const context = useContext(dataContext);
    return context;
}
