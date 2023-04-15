import { Box, Button, Container, Typography } from "@mui/material";
import Job from "../types/jobType";
import { useLocation } from "react-router-dom";

const JobComponent: React.FC = () => {
  const location = useLocation();
  const job: Job = location.state.job;
  return (
    <Container>
      <Box component="h1">{job.name}</Box>
      <Box>
        <Typography>{job.description}</Typography>
        <Typography>{job.pay} $</Typography>
        <Button>Apply for this Job</Button>
      </Box>
    </Container>
  );
};

export default JobComponent;
