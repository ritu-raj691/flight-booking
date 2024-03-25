import React, { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";
import { IFormData, IGeneralInfo } from "../../../Model/Inventory";

interface IDepartureInfoProps {
  formData: IFormData;
  setFormData: any;
}

const DepartureInfo = (props: IDepartureInfoProps) => {
  const { formData, setFormData } = props;

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevState: IFormData) => ({
      ...prevState,
      ["departureInfo"]: {
        ...prevState["departureInfo"],
        [name as string]: type === "checkbox" ? checked : value,
      },
    }));

    if (name === "departureTime" || name === "arrivalTime") {
      calculateDuration();
    }
  };

  const calculateDuration = () => {
    const { departureTime, arrivalTime } = formData.departureInfo;
    if (departureTime && arrivalTime) {
      const departureDate = new Date(`2000-01-01T${departureTime}`);
      const arrivalDate = new Date(`2000-01-01T${arrivalTime}`);
      let duration = new Date(arrivalDate.getTime() - departureDate.getTime());
      if (duration.getTime() < 0) {
        duration = new Date(24 * 60 * 60 * 1000 + duration.getTime()); // Add a day if arrival is next day
      }
      const hours = duration.getUTCHours().toString().padStart(2, "0");
      const minutes = duration.getUTCMinutes().toString().padStart(2, "0");
      const durationString = `${hours}:${minutes}`;

      setFormData((prevState: IFormData) => ({
        ...prevState,
        ["departureInfo"]: {
          ...prevState["departureInfo"],
          ["duration"]: durationString,
        },
      }));
    }
  };

  return (
    <>
      <Box
        sx={{
          minWidth: "280px",
          background: "white",
          padding: 2,
        }}
      >
        <Typography variant="h5" marginBottom={4} color="#888">
          Departure Flight Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Departure City</InputLabel>
              <Select
                label="Departure City"
                value={formData.departureInfo.departureCity}
                onChange={handleChange}
                name="departureCity"
              >
                <MenuItem value="city1">City 1</MenuItem>
                <MenuItem value="city2">City 2</MenuItem>
                <MenuItem value="city3">City 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Arrival City</InputLabel>
              <Select
                label="Arrival City"
                value={formData.departureInfo.arrivalCity}
                onChange={handleChange}
                name="arrivalCity"
              >
                <MenuItem value="city1">City 1</MenuItem>
                <MenuItem value="city2">City 2</MenuItem>
                <MenuItem value="city3">City 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Departure Time"
              type="time"
              value={formData.departureInfo.departureTime}
              onChange={handleChange}
              name="departureTime"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Arrival Time"
              type="time"
              value={formData.departureInfo.arrivalTime}
              onChange={handleChange}
              name="arrivalTime"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Duration (HH:MM)"
              value={formData.departureInfo.duration}
              onChange={handleChange}
              name="duration"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Departure Terminal"
              value={formData.departureInfo.departureTerminal}
              onChange={handleChange}
              name="departureTerminal"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Arrival Terminal"
              value={formData.departureInfo.arrivalTerminal}
              onChange={handleChange}
              name="arrivalTerminal"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.departureInfo.nextDay}
                  onChange={handleChange}
                  name="nextDay"
                />
              }
              label="Next Day"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DepartureInfo;
