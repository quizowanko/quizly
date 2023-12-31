import { Grid, Typography } from "@mui/material";
import { useQuizCategory } from "../providers/QuizCategoryProvider";
import CategoryCard from "../components/CategoryCard";

function MainPage() {
  const { categories } = useQuizCategory();
  return (
    <>
      <br /><br />
      <Typography variant="h4" align="center">
        Wielki quiz wiedzy ogólnej
      </Typography>
      <br /><br />
      <Typography variant="h5" align="center">
        Aby otrzymać nagrode z danej kategorii należy poprawnie odpowiedzieć na conajmniej 2 pytania
      </Typography>
      <br /><br />

      <Grid container spacing={5}>
        {
          categories.map((category) => (
            <Grid item xs={6}>
              <CategoryCard category={category} key={category.id} />
            </Grid>
          ))
        }
      </Grid>

    </>
  );
}

export default MainPage;
