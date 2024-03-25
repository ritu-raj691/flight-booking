import React from "react";
import { Grid, Box, Typography, TextField } from "@mui/material";
import { IFormData } from "../../../Model/Inventory";

interface IInfantPricesProps {
  formData: IFormData;
  setFormData: any;
}

const InfantPrices = (props: IInfantPricesProps) => {
  const { formData, setFormData } = props;

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevState: IFormData) => ({
      ...prevState,
      ["infantPrices"]: {
        ...prevState["infantPrices"],
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
          Infant Prices
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Infant Purchase Price"
              name="infantPurchasePrice"
              value={formData.infantPrices.infantPurchasePrice}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Infant Selling Price"
              name="infantSellingPrice"
              value={formData.infantPrices.infantSellingPrice}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default InfantPrices;
