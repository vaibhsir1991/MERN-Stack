import { Button } from "@material-ui/core";
import React from "react";
import CustomDialog from "../_shared/CustomDialog/CustomDialog";
import { RegistrationModel } from "../../constants/interfaces";
import { isToday } from "date-fns";

interface Props {
  open: boolean;
  onClose: () => void;
  registrationData: RegistrationModel;
}

function ReturnStatusDialog({ open, onClose, registrationData }: Props) {
  //Checks the vildity of return ticket
  const checkValidity = () => {
    if (
      isToday(new Date(registrationData?.createdAt)) &&
      registrationData?.isReturn
    ) {
      return true;
    }
    return false;
  };

  const dialogButtons = (
    <>
      <Button variant="text" color="primary" onClick={onClose}>
        Ok
      </Button>
    </>
  );

  return (
    <CustomDialog
      open={open}
      handleClose={onClose}
      dialogTitle={`Status for ${registrationData?.vehicalNo}`}
      dialogBody={checkValidity() ? "Return Valid" : "Return not valid!"}
      dialogButtons={dialogButtons}
    />
  );
}

export default ReturnStatusDialog;
