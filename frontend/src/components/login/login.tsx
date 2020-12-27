import { Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField/TextField";
import React from "react";
import history from "../../browserHistory";
import { pages } from "../../constants/navigation";

function Login() {
  return (
    <>
      <h3>Welcome to the XYZ Toll Booth</h3>
      <p>Please Login</p>
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth id="standard-basic" label="Username" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Password"
              type="Password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => history.push(pages.REGISTRATION)}
            >
              login
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Login;
