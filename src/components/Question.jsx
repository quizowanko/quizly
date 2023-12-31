import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import Answer from "./Answer";
import { FixedContainer } from "./FixedContainer";

function Question({ question, nextStep, setScore }) {
  const { answers } = question;
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const submitAnswer = () => {
    if (selectedAnswer === question.correctAnswer)
      setScore(score => score + 1);
    setSelectedAnswer(null);
    nextStep();
  };

  return (
    <>
      <Typography align="center" variant="h5">
        {question.question}
      </Typography>
      <br /><br />
      {question.image ?
        <>
          <FixedContainer>
            <img src={require(`../images/${question.image}`)} />
          </FixedContainer>
          <br /><br />
        </>
        : <></>}
      <Grid container spacing={5}>
        {
          answers.map((answer) => (
            <Grid item xs={6}>
              <Answer key={answer.id} answer={answer} selected={selectedAnswer === answer.id}
                      setSelected={setSelectedAnswer} />
            </Grid>
          ))
        }
      </Grid>
      <br /><br />
      <FixedContainer>
        <Button variant="contained" size="large" disabled={!selectedAnswer}
                onClick={submitAnswer}>
          Następne pytanie
        </Button>
      </FixedContainer>
      <br /><br />
    </>
  );
}

export default Question;
