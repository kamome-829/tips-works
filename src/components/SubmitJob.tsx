import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { convertDateToUnixTimestamp } from "../function/convertDateToUnixTimestamp";
import { Box, Container } from "@mui/material";

const SubmitJob = () => {
  const [open, setOpen] = useState(false);

  const [submissionUrl, setSubmissionUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Box
        sx={{ display: "flex", justifyContent: "center", minHeight: "4rem" }}
      >
        <Button
          variant="contained"
          onClick={handleClickOpen}
          color="secondary"
          sx={{ margin: "2rem" }}
        >
          Submit Job
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose} sx={{}}>
        <DialogTitle>Submit Job</DialogTitle>
        <DialogContent>
          <TextField
            id="submissionUrl"
            label="Submission"
            fullWidth
            value={submissionUrl}
            onChange={(event) => {
              setSubmissionUrl(event.target.value);
            }}
            sx={{ mt: "1rem" }}
          />
          <TextField
            id="description"
            label="Description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            fullWidth
            multiline
            rows={4}
            sx={{ mt: "1rem" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SubmitJob;
