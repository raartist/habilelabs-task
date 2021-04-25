import { CircularProgress, Dialog } from "@material-ui/core";
import ReactDOM from "react-dom";

export function addLoader() {
  ReactDOM.render(
    <Dialog
      open={true}
      fullWidth
      fullScreen
      PaperComponent="div"
      PaperProps={{
        style: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <CircularProgress color="secondary" size={200} thickness={1.5} />
    </Dialog>,
    document.getElementById("loader")
  );
}

export function removeLoader() {
  ReactDOM.unmountComponentAtNode(document.getElementById("loader"));
}
