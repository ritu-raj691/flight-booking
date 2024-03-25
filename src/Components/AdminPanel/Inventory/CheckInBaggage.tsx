import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { IFormData } from "../../../Model/Inventory";

interface ICheckInBaggageProps {
  formData: IFormData;
  setFormData: any;
}

const CheckInBaggage = (props: ICheckInBaggageProps) => {
  const { formData, setFormData } = props;

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevState: IFormData) => ({
      ...prevState,
      ["checkInBaggage"]: {
        ...prevState["checkInBaggage"],
        [name as string]: value,
      },
    }));
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
          Check-in Baggage
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Adult"
              name="adult"
              value={formData.checkInBaggage.adult}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Children"
              name="children"
              value={formData.checkInBaggage.children}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Infant"
              name="infant"
              value={formData.checkInBaggage.infant}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CheckInBaggage;
