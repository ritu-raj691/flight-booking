import React, { useState, lazy, Suspense } from "react";
import { Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { options } from "../../Constant/Constant";
import { ITravelers } from "../../Model/Travelers";
const FilterBar = lazy(() => import("../FilterBar/FilterBar"));
const FlightDetailCard = lazy(() => import("../SearchDeal/FlightDetailCard"));

const SearchList = () => {
  const [selectedDate, setSelectedDate] = useState<Date | string>(
    new Date()?.toLocaleDateString("en-US", options as any)
  );
  const [allTravelers, setAllTravelers] = useState<ITravelers>();

  const currentSelectedDate = (currentSelectedDate: Dayjs | null) => {
    const currentDate = new Date(
      currentSelectedDate?.toString() ?? ""
    )?.toLocaleDateString("en-US", options as any);
    setSelectedDate(currentDate);
  };

  const selectedPassengers = (travelers: ITravelers) => {
    setAllTravelers(travelers);
  };

  return (
    <>
      <Typography variant="h6" className="air-fares-label">
        Search for Series AIR Fares
      </Typography>
      <Suspense fallback={<></>}>
        <FilterBar
          newSelectedDate={currentSelectedDate}
          selectedPassengers={selectedPassengers}
        />
      </Suspense>
      <div className="selected-date-section">
        <Typography variant="subtitle2" className="selected-date">
          {selectedDate as any}
        </Typography>
      </div>
      <Suspense fallback={<></>}>
        <FlightDetailCard allTravelers={allTravelers as ITravelers} />
      </Suspense>
    </>
  );
};

export default SearchList;
