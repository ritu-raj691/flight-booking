import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button } from "@mui/material";
import Home from "./Components/Home/Home";
import Navbar from "./Common/Navbar/Navbar";
import "./App.css";
const SearchList = lazy(() => import("./Components/SearchDeal/SearchList"));
const TravelerDetail = lazy(
  () => import("./Components/TravelerDetails/TravelerDetail")
);
const Package = lazy(() => import("./Components/Package/Package"));
const SignUp = lazy(() => import("./Components/SignuUp/SignUp"));
const Login = lazy(() => import("./Components/Login/Login"));

const App = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  return (
    <>
      <Router>
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Home />} />
            <Route
              path="/search-flight"
              element={
                <Suspense fallback={<></>}>
                  <SearchList />{" "}
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
          <Route path="*" element={<>Page Not Found</>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
