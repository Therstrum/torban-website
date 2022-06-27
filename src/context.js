import React, { useState, useContext } from "react";
import {
  Links,
  ExternalLinks,
  ToDoBoard,
  GameJams,
  GameList,
  PtpList,
} from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPtp, setCurrentPtp] = useState(null);
  // build the functionality here
  return (
    <AppContext.Provider
      value={{
        Links,
        ExternalLinks,
        ToDoBoard,
        GameJams,
        GameList,
        isModalOpen,
        setIsModalOpen,
        currentPtp,
        setCurrentPtp,
        PtpList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
