import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // You can later replace this with actual signup logic or API call
    if (name && email && password) {
      navigate("/home", {
        state: { userName: name, fromSignup: true },
      });
    } else {
      alert("Please fill all fields before signing up!");
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* App Name */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#00b894", mb: 2 }}
      >
        Period Tracker & Care App
      </Typography>

      {/* Signup Box */}
      <Paper
        elevation={3}
        sx={{
          bgcolor: "#e0fff3",
          p: 4,
          borderRadius: 3,
          width: "320px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2, color: "#333", fontWeight: "bold" }}
        >
          Sign Up
        </Typography>

        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2, bgcolor: "#fff", borderRadius: 1 }}
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2, bgcolor: "#fff", borderRadius: 1 }}
        />

        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2, bgcolor: "#fff", borderRadius: 1 }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#00b894",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#00a07e" },
            mb: 1,
          }}
          onClick={handleSignup}
        >
          Sign Up
        </Button>

        {/* Back Button */}
        <Button
          fullWidth
          variant="outlined"
          sx={{
            borderColor: "#00b894",
            color: "#00b894",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#eafff7" },
          }}
          onClick={() => navigate("/")}
        >
          ← Back to Login
        </Button>
      </Paper>
    </Box>
  );
};

export default SignupPage;
