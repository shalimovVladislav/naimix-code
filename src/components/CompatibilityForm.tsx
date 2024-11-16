import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setNames, setResult } from "../redux/slices/compatibilitySlice";

const CompatibilityForm: React.FC = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setNames({ name1, name2 }));
    const result = Math.random() > 0.5 ? "Совместимость высокая!" : "Совместимость низкая!";
    dispatch(setResult(result));
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} width={300} mx="auto" mt={4}>
      <TextField label="Имя первого человека" value={name1} onChange={(e) => setName1(e.target.value)} />
      <TextField label="Имя второго человека" value={name2} onChange={(e) => setName2(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Узнать совместимость
      </Button>
    </Box>
  );
};

export default CompatibilityForm;
