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

const NewJobInput = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [pay, setPay] = useState<string>("");
  const [date, setDate] = useState<Dayjs | null>(null);
  const [description, setDescription] = useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (date) {
      const unixDate = convertDateToUnixTimestamp(date);
      const intPay = parseInt(pay) * 10 ** 23;
    }
  };

  return (
    <Container>
      <Box sx={{ position: "relative", minHeight: "4rem" }}>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          color="secondary"
          sx={{ position: "absolute", right: 0 }}
        >
          Post New Job
        </Button>
      </Box>
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
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            fullWidth
            multiline
            rows={4}
            sx={{ mt: "1rem" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Post</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default NewJobInput;
