import { Box, Container } from "@mui/material";
import JobList from "./JobList";
import NewJobInput from "./NewJobInput";

const Body = () => {
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
      <NewJobInput />
      <JobList />
    </Container>
  );
};

export default Body;
