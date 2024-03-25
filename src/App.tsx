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
import AdminPanel from "./Components/AdminPanel/AdminPanel";
const SearchList = lazy(() => import("./Components/SearchDeal/SearchList"));
const FilterBar = lazy(() => import("./Components/FilterBar/FilterBar"));
const TravelerDetail = lazy(
  () => import("./Components/TravelerDetails/TravelerDetail")
);
const Package = lazy(() => import("./Components/Package/Package"));
const Login = lazy(() => import("./Components/AdminPanel/Login/Login"));
const AdminDepartureArrivalInfo = lazy(
  () => import("./Components/AdminPanel/Inventory/DeptReturnInfo")
);
const Footer = lazy(() => import("./Components/Footer/Footer"));

const App = () => {
  const [isAdminPanelVisible, setIsAdminPanelVisible] =
    useState<boolean>(false);
  const [isTopNavBarEnabled, setIsTopNavBarEnabled] = useState<boolean>(false);
  const [isFilterBarEnabled, setIsFilterBarEnabled] = useState<boolean>(false);
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
      setIsAdminPanelVisible(false);
      if (location?.pathname?.includes("/admin")) {
        setIsAdminPanelVisible(true);
      }
      // Perform actions when route changes
      if (
        location?.pathname?.includes("/flights") ||
        location?.pathname?.includes("/search-flight")
      ) {
        setIsFilterBarEnabled(true);
      } else {
        setIsFilterBarEnabled(false);
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
        {isAdminPanelVisible ? (
          <AdminPanel />
        ) : (
          <>
            <Navbar />
            <div className="container">
              {isFilterBarEnabled && (
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
                <Route
                  path="/adminlogin"
                  element={
                    <Suspense fallback={<></>}>
                      <Login />
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
            <Suspense fallback={<></>}>
              <Footer />
            </Suspense>
          </>
        )}
      </Router>
    </>
  );
};

export default App;
