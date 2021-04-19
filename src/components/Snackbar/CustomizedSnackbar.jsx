import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MUiAlert from "@material-ui/lab/Alert";
import useStyles from "./styles";

const CuztomizedSnackbar = ({open, setOpen}) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MUiAlert
          onClose={handleClose}
          severity={"success"}
          elevation={6}
          variant="filled"
        >
          Transaction successfully created!
        </MUiAlert>
      </Snackbar>
    </div>
  );
};

export default CuztomizedSnackbar;
