import React, { Suspense, lazy, useState } from "react";
import { Box, TextField, Button, Grid, Link, Typography } from "@mui/material";
const ForgotPassword = lazy(
  () => import("../../ForgotPassword/ForgotPassword")
);

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [isForgetPwdModalOpen, setIsForgetPwdModalOpen] =
    useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData({ ...formData, email: value });
    validateEmail(value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData({ ...formData, password: value });
    validatePassword(value);
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "This field is required",
      }));
      setIsEmailValid(false);
    } else if (!value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      setIsEmailValid(false);
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      setIsEmailValid(true);
    }
  };

  const validatePassword = (value: string) => {
    if (!value.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "This field is required",
      }));
      setIsPasswordValid(false);
    } else if (value.length < 6) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters",
      }));
      setIsPasswordValid(false);
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, password: "" }));
      setIsPasswordValid(true);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform login logic here
    console.log("Login submitted:", formData);
  };

  const onForgotPwdClick = () => {
    setIsForgetPwdModalOpen(true);
  };

  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "280px",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          padding: 3,
          maxHeight: "80vh",
          overflowY: "auto",
          background: "white",
        }}
      >
        <Typography
          id="modal-title"
          variant="h5"
          component="h2"
          style={{
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#888",
          }}
        >
          Login to your account
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleEmailChange}
                required
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handlePasswordChange}
                required
                error={!!formErrors.password}
                helperText={formErrors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Link
                onClick={onForgotPwdClick}
                variant="body2"
                style={{ cursor: "pointer" }}
              >
                Forgot Password?
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isEmailValid || !isPasswordValid}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      {isForgetPwdModalOpen && (
        <Suspense>
          <ForgotPassword
            isForgetPwdModalOpen={isForgetPwdModalOpen}
            setIsForgetPwdModalOpen={setIsForgetPwdModalOpen}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Login;
