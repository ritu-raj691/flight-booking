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
import { IFormData } from "../../../Model/Inventory";

interface IReturnInfoProps {
  formData: IFormData;
  setFormData: any;
}

const ReturnInfo = (props: IReturnInfoProps) => {
  const { formData, setFormData } = props;

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevState: IFormData) => ({
      ...prevState,
      ["returnInfo"]: {
        ...prevState["returnInfo"],
        [name as string]: type === "checkbox" ? checked : value,
      },
    }));

    if (name === "departureTime" || name === "arrivalTime") {
      calculateDuration(name, value);
    }
  };

  const calculateDuration = (name: string, value: string) => {
    let departureTime;
    let arrivalTime;
    if (name === "departureTime") {
      departureTime = value;
      arrivalTime = formData.returnInfo.arrivalTime;
    } else if (name === "arrivalTime") {
      arrivalTime = value;
      departureTime = formData.returnInfo.departureTime;
    }

    if (departureTime && arrivalTime) {
      const [departureHours, departureMinutes] = departureTime
        .split(":")
        .map(Number);
      const [arrivalHours, arrivalMinutes] = arrivalTime.split(":").map(Number);

      // Calculate the departure and arrival times in minutes
      const departureTotalMinutes = departureHours * 60 + departureMinutes;
      const arrivalTotalMinutes = arrivalHours * 60 + arrivalMinutes;

      // Calculate the difference in minutes
      let durationMinutes = arrivalTotalMinutes - departureTotalMinutes;
      console.log("duration", durationMinutes);

      // If the arrival time is earlier than the departure time, it indicates a flight that crosses over to the next day
      if (durationMinutes < 0) {
        durationMinutes += 24 * 60; // Add 24 hours in minutes to represent the duration correctly
      }

      // Convert minutes to hours and remaining minutes
      let hours = Math.floor(durationMinutes / 60);
      let minutes = durationMinutes % 60;
      let hoursInString: string = "";
      let minutesInString: string = "";
      if (hours < 10) {
        hoursInString = `0${hours}`;
      } else {
        hoursInString = `${hours}`;
      }
      if (minutes < 10) {
        minutesInString = `0${minutes}`;
      } else {
        minutesInString = `${minutes}`;
      }
      const durationString = `${minutesInString}:${minutesInString}`;

      setFormData((prevState: IFormData) => ({
        ...prevState,
        ["returnInfo"]: {
          ...prevState["returnInfo"],
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
          Return Flight Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Departure City</InputLabel>
              <Select
                label="Departure City"
                value={formData.returnInfo.departureCity}
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
                value={formData.returnInfo.arrivalCity}
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
              value={formData.returnInfo.departureTime}
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
              value={formData.returnInfo.arrivalTime}
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
              value={formData.returnInfo.duration}
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
              value={formData.returnInfo.departureTerminal}
              onChange={handleChange}
              name="departureTerminal"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Arrival Terminal"
              value={formData.returnInfo.arrivalTerminal}
              onChange={handleChange}
              name="arrivalTerminal"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.returnInfo.nextDay}
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

export default ReturnInfo;
