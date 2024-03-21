import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { options } from "./Constant/Constant";
import { ITravelers } from "./Model/Travelers";
import Home from "./Components/Home/Home";
import Navbar from "./Common/Navbar/Navbar";
import "./App.css";
const SearchList = lazy(() => import("./Components/SearchDeal/SearchList"));
const FilterBar = lazy(() => import("./Components/FilterBar/FilterBar"));
const TravelerDetail = lazy(
  () => import("./Components/TravelerDetails/TravelerDetail")
);
const Package = lazy(() => import("./Components/Package/Package"));
const SignUp = lazy(() => import("./Components/SignuUp/SignUp"));
const Login = lazy(() => import("./Components/Login/Login"));

const App = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isFilterBarDisabled, setIsFilterBarDisabled] =
    useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | string>(
    new Date()?.toLocaleDateString("en-US", options as any)
  );
  const [allTravelers, setAllTravelers] = useState<ITravelers>({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const TrackRouteChanges = () => {
    const location = useLocation();

    useEffect(() => {
      // Perform actions when route changes
      if (
        location?.pathname?.includes("/package") ||
        location?.pathname?.includes("/traveler-detail")
      ) {
        setIsFilterBarDisabled(true);
      } else {
        setIsFilterBarDisabled(false);
      }
    }, [location.pathname]);

    return null;
  };

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
      <Router>
        <TrackRouteChanges />
        <Button onClick={() => setIsLoginModalOpen(true)}>Login</Button>
        <Button onClick={() => setIsSignUpModalOpen(true)}>SignUp</Button>
        <Suspense fallback={<></>}>
          <SignUp
            isSignUpModalOpen={isSignUpModalOpen}
            setIsSignUpModalOpen={setIsSignUpModalOpen}
          />
        </Suspense>
        <Suspense fallback={<></>}>
          <Login
            isLoginModalOpen={isLoginModalOpen}
            setIsLoginModalOpen={setIsLoginModalOpen}
          />
        </Suspense>
        <Navbar />
        <div className="container">
          {!isFilterBarDisabled && (
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
            </>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Home />} />
            <Route
              path="/search-flight"
              element={
                <Suspense fallback={<></>}>
                  <SearchList
                    allTravelers={allTravelers}
                    selectedDate={selectedDate}
                  />{" "}
                </Suspense>
              }
            />
            <Route
              path="/traveler-detail"
              element={
                <Suspense fallback={<></>}>
                  <TravelerDetail />{" "}
                </Suspense>
              }
            />
          </Routes>
        </div>
        <Routes>
          <Route
            path="/package/:id"
            element={
              <Suspense fallback={<></>}>
                <Package />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
