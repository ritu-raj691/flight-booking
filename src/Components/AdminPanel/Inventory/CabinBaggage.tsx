import React from "react";
import { Grid, Box, Typography, TextField } from "@mui/material";
import { IFormData } from "../../../Model/Inventory";

interface ICabinBaggageProps {
  formData: IFormData;
  setFormData: any;
}

const CabinBaggage = (props: ICabinBaggageProps) => {
  const { formData, setFormData } = props;

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevState: IFormData) => ({
      ...prevState,
      ["cabinBaggage"]: {
        ...prevState["cabinBaggage"],
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
          Cabin Baggage
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Adult"
              name="adult"
              value={formData.cabinBaggage.adult}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Children"
              name="children"
              value={formData.cabinBaggage.children}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Infant"
              name="infant"
              value={formData.cabinBaggage.infant}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CabinBaggage;
