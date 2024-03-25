import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import { IFormData } from "../../../Model/Inventory";

interface IStoppageProps {
  formData: IFormData;
  setFormData: any;
}

const Stoppage = (props: IStoppageProps) => {
  const { formData, setFormData } = props;

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevState: IFormData) => ({
      ...prevState,
      ["stoppageInfo"]: {
        ...prevState["stoppageInfo"],
        [name as string]: value,
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
          Stoppage Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>No. of departure stops</InputLabel>
              <Select
                label="No. of departure stops"
                value={formData.stoppageInfo.noOfDepartureStop}
                onChange={handleChange}
                name="noOfDepartureStop"
              >
                <MenuItem value="Non Stop">Non Stop</MenuItem>
                <MenuItem value="1 Stop">1 Stop</MenuItem>
                <MenuItem value="2 Stop">2 Stop</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>No. of return stops</InputLabel>
              <Select
                label="No. of departure stops"
                value={formData.stoppageInfo.noOfReturnStop}
                onChange={handleChange}
                name="noOfReturnStop"
              >
                <MenuItem value="Non Stop">Non Stop</MenuItem>
                <MenuItem value="1 Stop">1 Stop</MenuItem>
                <MenuItem value="2 Stop">2 Stop</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Stoppage;
