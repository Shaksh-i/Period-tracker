import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Grid,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // ✅ Added

const MedicationReminder = () => {
  const navigate = useNavigate();
  const [reminders, setReminders] = useState([
    { id: 1, name: "Iron Supplement", time: "08:00 AM", notes: "After breakfast" },
    { id: 2, name: "Pain Relief Tablet", time: "09:00 PM", notes: "If cramps occur" },
  ]);

  const [newReminder, setNewReminder] = useState({
    name: "",
    time: "",
    notes: "",
  });

  const handleAdd = () => {
    if (newReminder.name && newReminder.time) {
      setReminders([...reminders, { id: Date.now(), ...newReminder }]);
      setNewReminder({ name: "", time: "", notes: "" });
    }
  };

  const handleDelete = (id) => {
    setReminders(reminders.filter((r) => r.id !== id));
  };

  return (
    <>
      <Header /> {/* ✅ Added header */}
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          bgcolor: "#ffebf3",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
        }}
      >
        {/* Main Card */}
        <Paper
          elevation={4}
          sx={{
            width: "90%",
            maxWidth: 600,
            p: 4,
            borderRadius: 3,
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            mb: 3,
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ mb: 3, fontWeight: "bold", color: "#ff7eb9" }}
          >
            Medication Reminder
          </Typography>

          {/* Add Reminder Section */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Medicine Name"
                fullWidth
                value={newReminder.name}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Time"
                type="time"
                fullWidth
                value={newReminder.time}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, time: e.target.value })
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Notes (optional)"
                fullWidth
                value={newReminder.notes}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, notes: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button
                variant="contained"
                onClick={handleAdd}
                sx={{
                  backgroundColor: "#ff7eb9",
                  color: "#fff",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#ff5ca8" },
                }}
              >
                Add Reminder
              </Button>
            </Grid>
          </Grid>

          {/* Reminder List */}
          {reminders.map((reminder) => (
            <Paper
              key={reminder.id}
              elevation={2}
              sx={{
                p: 2,
                mb: 2,
                borderRadius: 2,
                backgroundColor: "#fff0f7",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: "bold", color: "#333" }}>
                  {reminder.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  ⏰ {reminder.time}
                </Typography>
                {reminder.notes && (
                  <Typography variant="body2" sx={{ color: "#888" }}>
                    📝 {reminder.notes}
                  </Typography>
                )}
              </Box>
              <IconButton color="error" onClick={() => handleDelete(reminder.id)}>
                <Delete />
              </IconButton>
            </Paper>
          ))}
        </Paper>

        {/* ✅ Back Button */}
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
    </>
  );
};

export default MedicationReminder;
