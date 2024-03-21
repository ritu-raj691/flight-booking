import React, { useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { ITravelers } from "../../Model/Travelers";
import "./FilterBar.css";
const PassengerSelector = lazy(() => import("./PassengerSelector"));

interface IFilterBar {
  newSelectedDate: (selectedDate: Dayjs | null) => void;
  selectedPassengers?: (travelers: ITravelers) => void;
}

const FilterBar = (props: IFilterBar) => {
  const { newSelectedDate, selectedPassengers } = props;
  const currentDate = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs(currentDate)
  );
  const navigate = useNavigate();

  const onDateChange = (newValue: Dayjs | null) => {
    newSelectedDate(newValue);
    setSelectedDate(newValue);
  };

  const onSearchFlightClick = () => {
    navigate(`/search-flight`);
  };

  return (
    <div className="filter-bar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DemoItem label="Depart on">
            <DatePicker
              className="date-picker"
              value={selectedDate}
              onChange={(newValue) => onDateChange(newValue)}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      <Suspense fallback={<></>}>
        <PassengerSelector selectedPassengers={selectedPassengers} />
      </Suspense>
      <Button
        variant="contained"
        className="search-flight"
        onClick={onSearchFlightClick}
      >
        Search Flights
      </Button>
    </div>
  );
};

export default FilterBar;
