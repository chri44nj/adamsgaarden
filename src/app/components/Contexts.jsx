"use client";
import { createContext, useState } from "react";
export const MyContexts = createContext();
export const SetMyContexts = createContext();

function Contexts({ children }) {
  const [myContexts, setMyContexts] = useState({
    currentPage: "",
  });
  return (
    <SetMyContexts.Provider value={setMyContexts}>
      <MyContexts.Provider value={myContexts}>{children}</MyContexts.Provider>
    </SetMyContexts.Provider>
  );
}

export default Contexts;
