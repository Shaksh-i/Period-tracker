import React, { useState } from "react";
import { Box, Typography, Button, Paper, TextField, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // ✅ Added header

const SymptomPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mood: "",
    cramps: "",
    flow: "",
    notes: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
  };

  return (
    <>
      <Header /> {/* ✅ Added header */}
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          bgcolor: "#c8f7c5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            bgcolor: "#ffffff",
            p: 5,
            borderRadius: 3,
            width: "80%",
            maxWidth: "900px",
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              align="center"
              sx={{ mb: 4, fontWeight: "bold", color: "#2e7d32" }}
            >
              Log Your Daily Symptoms
            </Typography>

            <Grid container spacing={4}>
              {/* Mood */}
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
                  Mood
                </Typography>
                <Box>
                  {["Happy", "Tired", "Irritable"].map((mood) => (
                    <Button
                      key={mood}
                      variant={formData.mood === mood ? "contained" : "outlined"}
                      onClick={() => handleChange("mood", mood)}
                      sx={{
                        m: 0.5,
                        borderColor: "#7FB77E",
                        color: formData.mood === mood ? "#fff" : "#7FB77E",
                        backgroundColor:
                          formData.mood === mood ? "#7FB77E" : "transparent",
                        "&:hover": {
                          backgroundColor:
                            formData.mood === mood
                              ? "#6fa86e"
                              : "rgba(127,183,126,0.1)",
                        },
                      }}
                    >
                      {mood}
                    </Button>
                  ))}
                </Box>
              </Grid>

              {/* Cramps */}
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
                  Cramps
                </Typography>
                <Box>
                  {["None", "Mild", "Moderate", "Severe"].map((cramp) => (
                    <Button
                      key={cramp}
                      variant={formData.cramps === cramp ? "contained" : "outlined"}
                      onClick={() => handleChange("cramps", cramp)}
                      sx={{
                        m: 0.5,
                        borderColor: "#7FB77E",
                        color: formData.cramps === cramp ? "#fff" : "#7FB77E",
                        backgroundColor:
                          formData.cramps === cramp ? "#7FB77E" : "transparent",
                        "&:hover": {
                          backgroundColor:
                            formData.cramps === cramp
                              ? "#6fa86e"
                              : "rgba(127,183,126,0.1)",
                        },
                      }}
                    >
                      {cramp}
                    </Button>
                  ))}
                </Box>
              </Grid>

              {/* Flow */}
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
                  Flow
                </Typography>
                <Box>
                  {["Light", "Medium", "Heavy"].map((flow) => (
                    <Button
                      key={flow}
                      variant={formData.flow === flow ? "contained" : "outlined"}
                      onClick={() => handleChange("flow", flow)}
                      sx={{
                        m: 0.5,
                        borderColor: "#7FB77E",
                        color: formData.flow === flow ? "#fff" : "#7FB77E",
                        backgroundColor:
                          formData.flow === flow ? "#7FB77E" : "transparent",
                        "&:hover": {
                          backgroundColor:
                            formData.flow === flow
                              ? "#6fa86e"
                              : "rgba(127,183,126,0.1)",
                        },
                      }}
                    >
                      {flow}
                    </Button>
                  ))}
                </Box>
              </Grid>

              {/* Notes */}
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
                  Additional Notes
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#7FB77E" },
                      "&:hover fieldset": { borderColor: "#6fa86e" },
                      "&.Mui-focused fieldset": { borderColor: "#7FB77E" },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Buttons */}
          <Box textAlign="center" sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#7FB77E",
                color: "#fff",
                fontWeight: "bold",
                px: 4,
                "&:hover": { backgroundColor: "#6fa86e" },
                mr: 2,
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: "#00b894",
                borderColor: "#00b894",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#eafff7" },
              }}
              onClick={() => navigate("/home")}
            >
              ← Back to Home Page
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default SymptomPage;
