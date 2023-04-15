import { Box, Button, Container, Typography } from "@mui/material";
import { jobs } from "../jobExample/jobs";
import { useNavigate } from "react-router-dom";
import Job from "../types/jobType";
import { useEffect, useState } from "react";

interface Props {
  jobList: Job[];
}

const JobList: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const handleGoToDetails = (job: Job) => {
    navigate(`/job/${job.id}`, { state: { job: job } });
  };

  useEffect(() => {}, []);
  return (
    <Container>
      {props.jobList.map((e: Job) => {
        return (
          <Box
            key={e.id}
            sx={{
              borderRadius: 2,
              marginBottom: "2rem",
              padding: "1rem",
              boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <Box sx={{ display: "flex", maxHeight: "1.5rem" }}>
              <Typography sx={{ pl: "1rem", pr: "1rem" }}>{e.name}</Typography>
              <Typography
                sx={{
                  pl: "1rem",
                  pr: "1rem",
                  maxWidth: "40%",
                  overflow: "hidden",
                }}
              >
                {e.description}
              </Typography>
              <Typography sx={{ pl: "1rem", pr: "1rem" }}>
                {e.pay} ETH
              </Typography>
              <Typography sx={{ pl: "1rem", pr: "1rem" }}>{e.date}</Typography>
              <Button
                sx={{ pl: "1rem", pr: "1rem" }}
                onClick={() => handleGoToDetails(e)}
                color="secondary"
                variant="outlined"
              >
                Details
              </Button>
            </Box>
          </Box>
        );
      })}
    </Container>
  );
};

export default JobList;
