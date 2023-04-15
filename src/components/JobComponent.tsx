import { Box, Button, Container, Typography } from "@mui/material";
import Job from "../types/jobType";
import { useLocation } from "react-router-dom";
import MenuBar from "./MenuBar";
import SubmitJob from "./SubmitJob";

const JobComponent: React.FC = () => {
  const location = useLocation();
  const job: Job = location.state.job;
  return (
    <>
      <MenuBar />
      <Container sx={{ mt: { xs: "none", lg: "3rem" } }}>
        <Box component="h1">{job.name}</Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "50%" }}>
            <Typography>{job.description}</Typography>
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>Pay: {job.pay} ETH</Typography>
            <SubmitJob />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default JobComponent;
