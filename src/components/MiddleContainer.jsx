import { Container } from "@mui/material";

function MiddleContainer({ children }) {
  return (
    <Container sx={{ height: "100%" }} maxWidth="lg">
      {children}
    </Container>
  );
}

export default MiddleContainer;
