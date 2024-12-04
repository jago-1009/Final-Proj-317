"use client";
import { children, createContext, useContext, useState } from "react";

const dataContext = createContext({});

export function DataProvider({ children }) {
  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  const contextValue = {
    capitalizeFirstLetter,
  };
  return (
    <dataContext.Provider value={contextValue}>{children}</dataContext.Provider>
  );
}
export default function useData() {
  const context = useContext(dataContext);
  return context;
}
