import { Button, Grid } from "@material-ui/core";
import React from "react";
import CustomDialog from "../_shared/CustomDialog/CustomDialog";
import { RegistrationModel } from "../../constants/interfaces";
import { formatDate } from "../_utils/formatter";

interface Props {
  open: boolean;
  onClose: () => void;
  registrationData: RegistrationModel;
}

function RegistrationSuccessDialog({ open, onClose, registrationData }: Props) {
  //Get valid date for return reciepts
  //   const getValidity = () => {
  //     if (registrationData?.createdAt) {
  //       const validityDate = new Date(registrationData.createdAt);
  //       validityDate.setHours(23, 59, 59, 999);
  //       return formatDate(validityDate, "PPpp");
  //     } else {
  //       return null;
  //     }
  //   };

  const dialogButtons = (
    <>
      <Button variant="contained" color="primary" onClick={onClose}>
        Print
      </Button>
      <Button variant="text" color="primary" onClick={onClose}>
        Continue
      </Button>
    </>
  );

  const dialogBody = (
    <Grid container spacing={2} style={{ border: "1px solid" }}>
      <Grid item xs={6}>
        <strong>Vehical No:</strong>
      </Grid>
      <Grid item xs={6}>
        {registrationData?.vehicalNo}
      </Grid>
      <Grid item xs={6}>
        <strong>Amount:</strong>
      </Grid>
      <Grid item xs={6}>
        {registrationData?.amount}
      </Grid>
      <Grid item xs={6}>
        <strong>Return:</strong>
      </Grid>
      <Grid item xs={6}>
        {registrationData?.isReturn ? "Yes" : "No"}
      </Grid>
      <Grid item xs={6}>
        <strong>Date:</strong>
      </Grid>
      <Grid item xs={6}>
        {registrationData?.createdAt &&
          formatDate(registrationData?.createdAt, "PPpp")}
      </Grid>
      {/**If return, print validity date as well */}
      {registrationData?.isReturn && (
        <>
          <Grid item xs={6}>
            <strong>Validity:</strong>
          </Grid>
          <Grid item xs={6}>
            {registrationData?.validTill &&
              formatDate(registrationData?.validTill, "PPpp")}
          </Grid>
        </>
      )}
    </Grid>
  );

  return (
    <CustomDialog
      open={open}
      handleClose={onClose}
      dialogTitle={"TOLL RECIEPT"}
      dialogBody={dialogBody}
      dialogButtons={dialogButtons}
    />
  );
}

export default RegistrationSuccessDialog;
