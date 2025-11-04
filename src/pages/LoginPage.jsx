import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password!");
      return;
    }

    // Extract name from email (e.g., shakshi@gmail.com → Shakshi)
    const namePart = email.split("@")[0];
    const userName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

    // Navigate to HomePage and send username + fromSignup = false
    navigate("/home", { state: { fromSignup: false, userName } });
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
        sx={{ fontWeight: "bold", color: "#ff7eb9", mb: 2 }}
      >
        Period Tracker & Care App
      </Typography>

      {/* Login Box */}
      <Paper
        elevation={3}
        sx={{
          bgcolor: "#ffe6f0",
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
          Login
        </Typography>

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
            backgroundColor: "#ff7eb9",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#ff5ca8" },
            mb: 1,
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            borderColor: "#ff7eb9",
            color: "#ff7eb9",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#fff0f7" },
          }}
          onClick={() => navigate("/")}
        >
          ← Back to Dashboard
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
