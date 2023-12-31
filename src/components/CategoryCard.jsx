import { useQuizCategory } from "../providers/QuizCategoryProvider";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

function CategoryCard({ category }) {
  const { title, id } = category;
  const { setSelectedCategory } = useQuizCategory();

  return (
    <Card>
      <CardActionArea onClick={() => setSelectedCategory(id)} sx={{ minHeight: 200 }}>
        <CardContent>
          <Typography align="center" variant="h4">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CategoryCard;
