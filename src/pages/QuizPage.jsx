import { useQuizCategory } from "../providers/QuizCategoryProvider";
import MiddleContainer from "../components/MiddleContainer";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { FixedContainer } from "../components/FixedContainer";
import Question from "../components/Question";
import { usePage } from "../providers/PageProvider";

function QuizPage() {
  const { currentCategory, setSelectedCategory } = useQuizCategory();
  const { setSelectedPage } = usePage();

  const backToMain = () => {
    setSelectedPage("main");
    setSelectedCategory("");
  };

  const [currentStep, setCurrentStep] = useState(-1);
  const [score, setScore] = useState(0);

  const nextStep = () => {
    setCurrentStep((step) => step + 1);
  };

  return (
    <MiddleContainer>
      <br /><br />
      <Typography variant="h4" align="center">
        {currentCategory.title}
      </Typography>
      <br /><br />
      {currentStep > -1 && currentStep < currentCategory.questions.length ?
        <Question question={currentCategory.questions[currentStep]} nextStep={nextStep} setScore={setScore} /> :
        currentStep === -1 ?
          <FixedContainer>
            <Button variant="contained" size="large"
                    onClick={nextStep}>
              Start
            </Button>
          </FixedContainer> :
          <>
            <Typography align="center" variant="h5">
              Twój wynik: {score}
            </Typography>
            <br /><br />
            {score >= 2 ? (
              <>
                <Typography align="center" variant="h5">
                  Udało się, oto nagroda: {currentCategory.reward}
                </Typography>
                {currentCategory.rewardImage ?
                  <>
                    <FixedContainer>
                      <img src={require(`../images/${currentCategory.rewardImage}`)} />
                    </FixedContainer>
                    <br /><br />
                  </>
                  : <></>}
              </>
              ) :
              <Typography align="center" variant="h5">"Niestety nie udało się przejść tej kategorii"</Typography>}
            <br /><br />
            <FixedContainer>
              <Button variant="contained" onClick={backToMain}>Strona główna</Button>
            </FixedContainer>
          </>
      }
    </MiddleContainer>
  );
}

export default QuizPage;
