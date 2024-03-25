import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { IFormData, IGeneralInfo } from "../../../Model/Inventory";
import "./GeneralInfo.css";

interface IGeneralInfoProps {
  formData: IFormData;
  setFormData: any;
}

const GeneralInfo = (props: IGeneralInfoProps) => {
  const { formData, setFormData } = props;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevNestedObject: IFormData) => ({
      ...prevNestedObject,
      ["generalInfo"]: {
        ...prevNestedObject["generalInfo"],
        [name as string]: value,
      },
    }));
  };

  const onDateChange = (date: Dayjs | null, field: keyof IGeneralInfo) => {
    setFormData((prevNestedObject: IFormData) => ({
      ...prevNestedObject,
      ["generalInfo"]: {
        ...prevNestedObject["generalInfo"],
        [field]: date,
      },
    }));
  };
  console.log(formData);
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
          General Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Airline</InputLabel>
              <Select
                label="Airline"
                value={formData.generalInfo.airline}
                onChange={handleChange}
                name="airline"
              >
                <MenuItem value="airline1">Airline 1</MenuItem>
                <MenuItem value="airline2">Airline 2</MenuItem>
                <MenuItem value="airline3">Airline 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Airline Number"
              name="airlineNumber"
              value={formData.generalInfo.airlineNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Return Airline Number"
              name="returnAirlineNumber"
              value={formData.generalInfo.returnAirlineNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="grid-date-picker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Start Date"
                value={formData.generalInfo.startDate}
                onChange={(newValue) => onDateChange(newValue, "startDate")}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="grid-date-picker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="End Date"
                value={formData.generalInfo.endDate}
                onChange={(newValue) => onDateChange(newValue, "endDate")}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Trip Duration"
              name="tripDuration"
              value={formData.generalInfo.tripDuration}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GeneralInfo;
