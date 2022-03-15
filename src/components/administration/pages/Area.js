import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
      //paddingTop: theme.spacing(10),
    },
  }));

export const Area = () => {

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <h1>area works</h1>
    </Container>
  );
};
