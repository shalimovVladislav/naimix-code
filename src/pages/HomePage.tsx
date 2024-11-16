import React from "react";
import { Typography, Box } from "@mui/material";
import CompatibilityForm from "../components/CompatibilityForm";

const HomePage: React.FC = () => (
  <Box>
    <Typography variant="h4" align="center" mt={4}>
      Добро пожаловать
    </Typography>
    <CompatibilityForm />
  </Box>
);

export default HomePage;
