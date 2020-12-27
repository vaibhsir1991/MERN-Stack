import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface Props {
  open: boolean;
  handleClose: () => void;
  dialogTitle: React.ReactNode;
  dialogBody: React.ReactNode;
  dialogButtons: React.ReactNode;
}

export default function CustomDialog({
  open,
  dialogBody,
  handleClose,
  dialogButtons,
  dialogTitle,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogBody}
        </DialogContentText>
      </DialogContent>
      <DialogActions>{dialogButtons}</DialogActions>
    </Dialog>
  );
}
