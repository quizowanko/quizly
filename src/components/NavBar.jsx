import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import MiddleContainer from "./MiddleContainer";
import { lightBlue } from "@mui/material/colors";
import { usePage } from "../providers/PageProvider";
import { useQuizCategory } from "../providers/QuizCategoryProvider";

const NavBar = () => {
  const { setSelectedPage } = usePage();
  const { setSelectedCategory } = useQuizCategory();
  const backToMain = () => {
    setSelectedPage("main");
    setSelectedCategory("");
  };

  return (
    <>
      <AppBar elevation={0} position="static" sx={{ backgroundColor: lightBlue["200"] }}>
        <MiddleContainer>
          <Toolbar disableGutters>
            <Grid container justifyContent="flex-start" alignItems="center">
              <Grid item xs={1}>
                Tu bedzie logo
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h5" onClick={backToMain}>
                  Quizowanie
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </MiddleContainer>
      </AppBar>
    </>
  );
};

export default NavBar;
