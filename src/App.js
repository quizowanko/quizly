import NavBar from "./components/NavBar";
import MiddleContainer from "./components/MiddleContainer";
import { QuizCategoryProvider } from "./providers/QuizCategoryProvider";
import { usePage } from "./providers/PageProvider";


function App() {
  const { currentPage } = usePage();
  return (
    <QuizCategoryProvider>
      <NavBar />
      <MiddleContainer>
        {currentPage}
      </MiddleContainer>
    </QuizCategoryProvider>
  );
}

export default App;
