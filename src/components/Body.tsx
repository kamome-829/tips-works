import { Box, Container } from "@mui/material";
import JobList from "./JobList";
import NewJobInput from "./NewJobInput";

const Body = () => {
  return (
    <Container>
      <Box component="h1" sx={{ mt: "2rem", mb: "2rem" }}>
        Job list
      </Box>
      <NewJobInput />
      <JobList />
    </Container>
  );
};

export default Body;
