import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // ✅ added header import

const CyclePage = () => {
  const navigate = useNavigate();

  // Dummy data (replace later with backend data)
  const currentCycleData = [
    { day: "Day 1", flow: 3 },
    { day: "Day 2", flow: 4 },
    { day: "Day 3", flow: 5 },
    { day: "Day 4", flow: 3 },
    { day: "Day 5", flow: 2 },
  ];

  const nextCyclePrediction = [
    { day: "Day 1", prediction: 2 },
    { day: "Day 2", prediction: 3 },
    { day: "Day 3", prediction: 5 },
    { day: "Day 4", prediction: 4 },
    { day: "Day 5", prediction: 3 },
  ];

  return (
    <>
      <Header /> {/* ✅ Added reusable Header */}
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          bgcolor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 4,
          overflowX: "hidden",
        }}
      >
        {/* Header Title */}
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: "bold", color: "#ff7eb9" }}
        >
          Your Cycle Overview
        </Typography>

        {/* Current Cycle Chart */}
        <Paper elevation={3} sx={{ width: "80%", p: 3, mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, color: "#333" }}>
            Flow Intensity Over Days
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={currentCycleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="flow"
                stroke="#ff7eb9"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </Paper>

        {/* Expected Next Cycle Chart */}
        <Paper elevation={3} sx={{ width: "80%", p: 3, mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, color: "#333" }}>
            Expected Next Cycle Prediction
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={nextCyclePrediction}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="prediction"
                stroke="#ff7eb9"
                strokeDasharray="5 5"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </Paper>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff7eb9",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#ff94c2" },
            }}
          >
            Add Cycle Log
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "#ff7eb9",
              borderColor: "#ff7eb9",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#fff0f5" },
            }}
            onClick={() => navigate("/home")}
          >
            ← Back to Home Page
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CyclePage;
