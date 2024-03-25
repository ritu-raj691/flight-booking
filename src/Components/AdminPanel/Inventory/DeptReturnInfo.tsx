import React, { lazy, Suspense, useState } from "react";
import { Box, TextField, Button, Grid, Link, Typography } from "@mui/material";
import { IFormData } from "../../../Model/Inventory";
const GeneralInfo = lazy(() => import("./GeneralInfo"));
const DepartureInfo = lazy(() => import("./DepartureInfo"));
const ReturnInfo = lazy(() => import("./ReturnInfo"));
const StoppageInfo = lazy(() => import("./StoppageInfo"));
const CheckInBaggage = lazy(() => import("./CheckInBaggage"));
const CabinBaggage = lazy(() => import("./CabinBaggage"));
const InfantPrices = lazy(() => import("./InfantPrices"));
const PriceDetails = lazy(() => import("./PriceDetails"));
const CloseBookingBefore = lazy(() => import("./CloseBookingBefore"));

const DeptArrivalInfo = () => {
  const [formData, setFormData] = useState<IFormData>({
    generalInfo: {
      airline: "",
      airlineNumber: "",
      returnAirlineNumber: "",
      startDate: null,
      endDate: null,
      tripDuration: "",
    },
    departureInfo: {
      departureCity: "",
      arrivalCity: "",
      departureTime: "",
      arrivalTime: "",
      duration: "",
      departureTerminal: "",
      arrivalTerminal: "",
      nextDay: false,
    },
    returnInfo: {
      departureCity: "",
      arrivalCity: "",
      departureTime: "",
      arrivalTime: "",
      duration: "",
      departureTerminal: "",
      arrivalTerminal: "",
      nextDay: false,
    },
    stoppageInfo: {
      noOfDepartureStop: "",
      noOfReturnStop: "",
    },
    checkInBaggage: {
      adult: "15",
      children: "15",
      infant: "0",
    },
    cabinBaggage: {
      adult: "7",
      children: "7",
      infant: "7",
    },
    closeBookingBefore: {
      days: 0,
      closingTime: "",
    },
    infantPrices: {
      infantPurchasePrice: "",
      infantSellingPrice: "",
    },
    purchaseSellingPrices: {
      purchaseDate: null,
      basePrice: "",
      feesAndTaxes: "",
      pnr: "",
      sellingPrice: "",
      seatQuantity: "",
      Narration: "",
    },
  });
  console.log("DeptArrivalInfo", formData);
  return (
    <div>
      <Suspense fallback={<></>}>
        <GeneralInfo formData={formData} setFormData={setFormData} />
      </Suspense>
      <Suspense fallback={<></>}>
        <DepartureInfo formData={formData} setFormData={setFormData} />
      </Suspense>
      <Suspense fallback={<></>}>
        <ReturnInfo formData={formData} setFormData={setFormData} />
      </Suspense>
      <Suspense fallback={<></>}>
        <StoppageInfo formData={formData} setFormData={setFormData} />
      </Suspense>
      <Suspense fallback={<></>}>
        <CheckInBaggage formData={formData} setFormData={setFormData} />
      </Suspense>
      <Suspense fallback={<></>}>
        <CabinBaggage formData={formData} setFormData={setFormData} />
      </Suspense>
      <Suspense fallback={<></>}>
        <InfantPrices formData={formData} setFormData={setFormData} />
      </Suspense>
      <Suspense fallback={<></>}>
        <PriceDetails formData={formData} setFormData={setFormData} />
      </Suspense>
      <Suspense fallback={<></>}>
        <CloseBookingBefore formData={formData} setFormData={setFormData} />
      </Suspense>
      <Box
        sx={{
          minWidth: "280px",
          background: "white",
          padding: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={2} lg={2}>
            <Button variant="contained" color="primary" fullWidth>
              Save
            </Button>
          </Grid>
          <Grid item xs={12} sm={3} md={2} lg={2}>
            <Button
              variant="contained"
              style={{ background: "#fff", color: "#333" }}
              fullWidth
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DeptArrivalInfo;
