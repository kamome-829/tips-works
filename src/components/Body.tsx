import { Box, Container } from "@mui/material";
import JobList from "./JobList";
import NewJobInput from "./NewJobInput";
import { useState } from "react";
import { jobs } from "../jobExample/jobs";

const Body = () => {
  const [jobList, setJobList] = useState(jobs);

  return (
    <Container>
      <Box
        component="h1"
        sx={{
          mt: { xs: "none", lg: "3rem" },
          mb: "none",
          mr: "2rem",
          ml: "2rem",
        }}
      >
        Job list
      </Box>
      <NewJobInput setJobList={setJobList} />
      <JobList jobList={jobList} />
    </Container>
  );
};

export default Body;
