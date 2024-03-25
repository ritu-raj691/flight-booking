import React from "react";
import { Grid, Box, Typography, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { IFormData, IPurchaseSellingPrices } from "../../../Model/Inventory";

interface IPriceDetailsProps {
  formData: IFormData;
  setFormData: any;
}

const PriceDetails = (props: IPriceDetailsProps) => {
  const { formData, setFormData } = props;

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevState: IFormData) => ({
      ...prevState,
      ["purchaseSellingPrices"]: {
        ...prevState["purchaseSellingPrices"],
        [name as string]: value,
      },
    }));
  };

  const onDateChange = (
    date: Dayjs | null,
    field: keyof IPurchaseSellingPrices
  ) => {
    setFormData((prevNestedObject: IFormData) => ({
      ...prevNestedObject,
      ["purchaseSellingPrices"]: {
        ...prevNestedObject["purchaseSellingPrices"],
        [field]: date,
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
          Purchase Selling Prices
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4} className="grid-date-picker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                value={formData.purchaseSellingPrices.purchaseDate}
                onChange={(newValue) => onDateChange(newValue, "purchaseDate")}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Base Price"
              name="basePrice"
              value={formData.infantPrices.infantPurchasePrice}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Fees & Taxes"
              name="feesAndTaxes"
              value={formData.infantPrices.infantSellingPrice}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="PNR"
              name="pnr"
              value={formData.infantPrices.infantPurchasePrice}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Selling Price"
              name="sellingPrice"
              value={formData.infantPrices.infantPurchasePrice}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Seat Quantity"
              name="seatQuantity"
              value={formData.infantPrices.infantPurchasePrice}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <TextField
              fullWidth
              label="Narration"
              name="narration"
              value={formData.infantPrices.infantPurchasePrice}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PriceDetails;
