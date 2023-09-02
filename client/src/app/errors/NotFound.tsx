import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container sx={{ height: 400 }} component={Paper}>
      <Typography gutterBottom variant="h3">
        Oops ! Page not found
      </Typography>
      <Divider />
      <Button fullWidth component={Link} to="/catalog">
        Go back to catalog
      </Button>
    </Container>
  );
};

export default NotFound;
