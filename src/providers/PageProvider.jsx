import { createContext, useContext, useState } from "react";
import MainPage from "../pages/MainPage";
import QuizPage from "../pages/QuizPage";

const PageContext = createContext({});

const PageProvider = ({ children }) => {
  const pages = {
    "main": <MainPage />,
    "quiz": <QuizPage />
  };
  const [selectedPage, setSelectedPage] = useState("main");

  const currentPage = pages[selectedPage];

  return (
    <PageContext.Provider value={{ currentPage, setSelectedPage }}>
      {children}
    </PageContext.Provider>
  );
};

const usePage = () => useContext(PageContext);

export { PageProvider, usePage };
