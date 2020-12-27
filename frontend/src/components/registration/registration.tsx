import {
  Button,
  FormControlLabel,
  Grid,
  Snackbar,
  Switch,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField/TextField";
import React from "react";
import _registrationService from "../../services/registration.service";
import history from "../../browserHistory";
import { pages } from "../../constants/navigation";
import { RegistrationModel } from "../../constants/interfaces";
import RegistrationSuccessDialog from "./registrationSuccessDialog";

function Registration() {
  const [checked, setChecked] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>(undefined);
  const [
    registrationData,
    setRegistrationData,
  ] = React.useState<RegistrationModel>({} as RegistrationModel);
  const [vehicalNo, setVehicalNo] = React.useState("");

  const handleSubmit = () => {
    _registrationService
      .create({
        vehicalNo: vehicalNo,
        isReturn: checked,
      })
      .then((res: { data: RegistrationModel }) => {
        setRegistrationData(res.data);
        setDialogOpen(true);
      })
      .catch((error) => {
        setError(error.message || "Unknown Error");
      });
  };

  const handleDialogClose = () => {
    setChecked(false);
    setVehicalNo("");
    setDialogOpen(false);
  };

  return (
    <>
      <p>New Vehical Registration </p>
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Vehical Number"
              value={vehicalNo}
              onChange={(e) => setVehicalNo(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  name="Return"
                  color="primary"
                />
              }
              label="Return"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history.push(pages.RETURN)}
            >
              Check Return
            </Button>
          </Grid>
        </Grid>
      </form>
      <RegistrationSuccessDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        registrationData={registrationData}
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={!!error}
        onClose={() => setError(undefined)}
        message={error}
      />
    </>
  );
}

export default Registration;
