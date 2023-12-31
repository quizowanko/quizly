import { Card, CardActionArea, Typography } from "@mui/material";

function Answer({ answer, selected, setSelected }) {
  const { id } = answer;
  return (
    <Card variant="outlined" sx={selected ? { borderColor: "green" } : {}}>
      <CardActionArea onClick={() => setSelected(id)} sx={{ minHeight: 150, padding: 1 }}>
        <Typography align="center" variant="h4">
          {answer.answer}
        </Typography>
      </CardActionArea>
    </Card>
  );
}

export default Answer;
