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

const NewJobInput = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [pay, setPay] = useState<string>("");
  const [date, setDate] = useState<Dayjs | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (date) {
      const unixDate = convertDateToUnixTimestamp(date);
      const floatPay = parseFloat(pay);
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Post New Job
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Post a Job</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Job name"
            type="email"
            fullWidth
            variant="standard"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            margin="dense"
            id="pay"
            label="Pay (ETH)"
            fullWidth
            variant="standard"
            value={pay}
            onChange={(event) => setName(event.target.value)}
          />
          <DatePicker
            label="Deadline"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            sx={{ mt: "1rem" }}
          />
          <TextField
            id="description"
            label="Description"
            fullWidth
            multiline
            rows={4}
            sx={{ mt: "1rem" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Post</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NewJobInput;
