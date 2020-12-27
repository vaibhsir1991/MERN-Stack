import { Button, Grid, Snackbar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField/TextField";
import React from "react";
import _registrationService from "../../services/registration.service";
import history from "../../browserHistory";
import { pages } from "../../constants/navigation";
import { RegistrationModel } from "../../constants/interfaces";
import ReturnStatusDialog from "./returnStatusDialog";

function Return() {
  const [vehicalNo, setVehicalNo] = React.useState("");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>(undefined);
  const [
    registrationData,
    setRegistrationData,
  ] = React.useState<RegistrationModel>({} as RegistrationModel);

  const handleSubmit = () => {
    _registrationService
      .get(vehicalNo)
      .then((res: { data: RegistrationModel }) => {
        setRegistrationData(res.data);
        setDialogOpen(true);
      })
      .catch((error) => {
        setError("Entry not found!");
      });
  };

  const handleDialogClose = () => {
    setVehicalNo("");
    setDialogOpen(false);
  };

  return (
    <>
      <p>Check Vehical Return </p>
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
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Check
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              variant="contained"
              color="secondary"
              onClick={() => history.push(pages.REGISTRATION)}
            >
              New Registration
            </Button>
          </Grid>
        </Grid>
      </form>
      <ReturnStatusDialog
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

export default Return;
