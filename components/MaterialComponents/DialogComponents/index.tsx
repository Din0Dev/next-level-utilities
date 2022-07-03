import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";

const propTypes = {};

interface DialogComponentsI {
  titleButton?: String;
  dialogTitle?: String;
  dialogContent?: any;
  disableSubmit?: Boolean;
}

const DialogComponents = (props: DialogComponentsI) => {
  const {
    titleButton = "Open Dialog",
    dialogTitle = "Tittle",
    dialogContent,
    disableSubmit = false,
  } = props;

  //! State
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //! Function
  function PaperComponent(props: PaperProps) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

  //! Render
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {titleButton}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        className="draggable-dialog"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContent}</DialogContentText>
        </DialogContent>
        <DialogActions style={{justifyContent: 'flex-start'}}>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          {!disableSubmit && <Button onClick={handleClose}>Subscribe</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
};

DialogComponents.propTypes = propTypes;
export default DialogComponents;
