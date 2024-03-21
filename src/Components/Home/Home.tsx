import React, { lazy, Suspense, useState } from "react";
import { Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import "./Home.css";
import { options } from "../../Constant/Constant";
const FilterBar = lazy(() => import("../FilterBar/FilterBar"));
const FlightList = lazy(() => import("../FlightList/FlightList"));

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date | string>(
    new Date()?.toLocaleDateString("en-US", options as any)
  );

  const currentSelectedDate = (currentSelectedDate: Dayjs | null) => {
    const currentDate = new Date(
      currentSelectedDate?.toString() ?? ""
    )?.toLocaleDateString("en-US", options as any);
    setSelectedDate(currentDate);
  };

  return (
    <>
      <Typography variant="h6" className="air-fares-label">
        Search for Series AIR Fares
      </Typography>
      <Suspense fallback={<></>}>
        <FilterBar newSelectedDate={currentSelectedDate} />
      </Suspense>
      <Typography variant="h5" className="package-label">
        Book Fixed Departure Packages at Best Prices
      </Typography>
      <Suspense fallback={<></>}>
        <FlightList />
      </Suspense>
      <Suspense fallback={<></>}>
        <FlightList />
      </Suspense>
      <Suspense fallback={<></>}>
        <FlightList />
      </Suspense>
      <Suspense fallback={<></>}>
        <FlightList />
      </Suspense>
      <Suspense fallback={<></>}>
        <FlightList />
      </Suspense>
    </>
  );
};

export default Home;
