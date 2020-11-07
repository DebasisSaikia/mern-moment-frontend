import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import download1 from "./Images/money.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import { useState } from "react";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Moments
        </Typography>
        <img
          className={classes.image}
          src="https://www.flaticon.com/svg/static/icons/svg/3643/3643980.svg"
          alt="dreamy"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
