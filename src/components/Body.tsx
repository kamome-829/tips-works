import { Box, Container } from "@mui/material";
import JobList from "./JobList";

const Body = () => {
  return (
    <Container>
      <Box component="h1" sx={{ mt: "2rem", mb: "2rem" }}>
        Job list
      </Box>
      <JobList />
    </Container>
  );
};

export default Body;
