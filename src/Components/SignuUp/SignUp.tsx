import React, { useState } from "react";
import { Box, TextField, Button, Grid, Modal, Typography } from "@mui/material";

interface ISignUp {
  isSignUpModalOpen: boolean;
  setIsSignUpModalOpen: (isSignUpModalOpen: boolean) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  panNumber: string;
  zipCode: string;
}

const SignUp = (props: ISignUp) => {
  const { isSignUpModalOpen, setIsSignUpModalOpen } = props;
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    panNumber: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "firstName":
        return value ? "" : `First Name is required`;
      case "address":
        return value ? "" : `Address is required`;
      case "city":
        return value ? "" : `City is required`;
      case "email":
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ? ""
          : "Invalid email address";
      case "phone":
        return value.match(/^\d{10}$/) ? "" : "Invalid phone number";
      case "zipCode":
        return value.match(/^\d{6}$/) ? "" : "Invalid zip code";
      case "panNumber":
        return value.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
          ? ""
          : "Invalid PAN Number";
      default:
        return "";
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const error = validateField(name as keyof FormData, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const isFormValid = () => {
    return Object.values(errors).every((error) => !error);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div>
      {isSignUpModalOpen && (
        <Modal
          open={isSignUpModalOpen}
          onClose={(event, reason) => {
            if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
              // Restrict modal to close when outside click and escape key press
              setIsSignUpModalOpen(false);
            }
          }}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
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
              Register
            </Typography>
            <div id="modal-description">
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField
                      fullWidth
                      label="First Name*"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField
                      fullWidth
                      label="Email Address*"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      placeholder="email@myemail.com"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField
                      fullWidth
                      label="Phone* (with Country Code)"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      placeholder="e.g.+14601239901"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField
                      fullWidth
                      label="Mailing Address*"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      error={!!errors.address}
                      helperText={errors.address}
                      placeholder="Street address, P.O. Box, Company Name, C/O"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField
                      fullWidth
                      label="City*"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      error={!!errors.city}
                      helperText={errors.city}
                      placeholder="e.g. Seattle, Dallas, Miami"
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField
                      fullWidth
                      label="PAN Number*"
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleInputChange}
                      error={!!errors.panNumber}
                      helperText={errors.panNumber}
                      placeholder="Please enter in capital letter."
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField
                      fullWidth
                      label="Zip/Postal Code*"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      error={!!errors.zipCode}
                      helperText={errors.zipCode}
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={
                        !isFormValid() ||
                        !formData?.firstName ||
                        !formData?.email ||
                        !formData?.phone ||
                        !formData.address ||
                        !formData.city ||
                        !formData.panNumber ||
                        !formData.zipCode
                      }
                    >
                      Sign Up
                    </Button>
                    <Button
                      onClick={() => setIsSignUpModalOpen(false)}
                      variant="contained"
                      color="primary"
                      style={{ marginLeft: "12px" }}
                    >
                      Close
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default SignUp;
