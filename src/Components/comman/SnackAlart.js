import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { closeHandel } from "../../Redux/sliceReducers/notificationsSlice";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

function Transition(props) {
  return <Slide {...props} direction="right" />;
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackAlart() {
  const dispatch = useDispatch();

  const reduxState = useSelector((state) => state.isOpen);

  React.useEffect(() => {
    console.log(reduxState.val);
  }, [reduxState]);

  const handleClose = () => {
    dispatch(closeHandel());
  };

 
  return (
    <div>
      <Snackbar
        open={reduxState.isOpen}
        sx={{ width: { md: "300px" } }}
        TransitionComponent={Transition}
      >
        <Alert
          severity={reduxState.val?.variant || "success"}
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          {reduxState.val?.msg || "كل شئ جيد"}
        </Alert>
      </Snackbar>
    </div>
  );
}
