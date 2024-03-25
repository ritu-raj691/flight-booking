import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Collapse,
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
} from "@mui/material";

interface RowData {
  id: number;
  airline: string;
  sector: string;
  airlineNo: string;
  returnAirlineNo: string;
  departureDate: string;
  returnDate: string;
  departureTime: string;
  arrivalTime: string;
  quantity: number;
  available: number;
  sold: number;
  PNR: string;
  purchase: string;
  price: number;
  infant: number;
}

const data: RowData[] = [
  {
    id: 1,
    airline: "Airline 1",
    sector: "Sector 1",
    airlineNo: "123",
    returnAirlineNo: "456",
    departureDate: "2024-04-01",
    returnDate: "2024-04-05",
    departureTime: "08:00",
    arrivalTime: "10:00",
    quantity: 100,
    available: 80,
    sold: 20,
    PNR: "ABC123",
    purchase: "John Doe",
    price: 100,
    infant: 10,
  },
  {
    id: 2,
    airline: "Airline 2",
    sector: "Sector 2",
    airlineNo: "456",
    returnAirlineNo: "789",
    departureDate: "2024-04-02",
    returnDate: "2024-04-06",
    departureTime: "09:00",
    arrivalTime: "11:00",
    quantity: 120,
    available: 100,
    sold: 20,
    PNR: "DEF456",
    purchase: "Jane Smith",
    price: 120,
    infant: 15,
  },
  // Add more data as needed
];

const GridInventory: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [editedRow, setEditedRow] = useState<RowData | null>(null);

  const handleRowClick = (id: number) => {
    setSelectedRow(selectedRow === id ? null : id);
    setEditedRow(data.find((row) => row.id === id) || null);
  };

  const handleEditChange = (field: keyof RowData, value: any) => {
    if (editedRow) {
      setEditedRow((prevState: any) => ({ ...prevState, [field]: value }));
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Airline
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Sector
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Airline No.
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Return Airline No.
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Departure Date
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Return Date
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Departure Time
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Arrival Time
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Quantity
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Available
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Sold
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  PNR
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Purchase
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Price
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Infant
                </TableCell>
                <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow onClick={() => handleRowClick(row.id)}>
                    <TableCell>{row.airline}</TableCell>
                    <TableCell>{row.sector}</TableCell>
                    <TableCell>{row.airlineNo}</TableCell>
                    <TableCell>{row.returnAirlineNo}</TableCell>
                    <TableCell>{row.departureDate}</TableCell>
                    <TableCell>{row.returnDate}</TableCell>
                    <TableCell>{row.departureTime}</TableCell>
                    <TableCell>{row.arrivalTime}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>{row.available}</TableCell>
                    <TableCell>{row.sold}</TableCell>
                    <TableCell>{row.PNR}</TableCell>
                    <TableCell>{row.purchase}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.infant}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" size="small">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={16}
                    >
                      <Collapse
                        in={selectedRow === row.id}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Box margin={1}>
                          <Typography variant="h6" gutterBottom component="div">
                            Details
                          </Typography>
                          <Grid container spacing={2}>
                            {editedRow &&
                              Object.entries(row).map(([key, value]) => (
                                <Grid item xs={6} key={key}>
                                  <TextField
                                    label={key}
                                    variant="outlined"
                                    fullWidth
                                    value={editedRow[key as keyof RowData]}
                                    onChange={(e) =>
                                      handleEditChange(
                                        key as keyof RowData,
                                        e.target.value
                                      )
                                    }
                                  />
                                </Grid>
                              ))}
                          </Grid>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default GridInventory;
