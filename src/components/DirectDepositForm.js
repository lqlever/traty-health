import React, { createContext, useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const StoreContext = createContext();

function DirectDepositForm() {
  
  const store = useContext(StoreContext);

  const [formData, setFormData] = useState({
    accountNumber: "",
    routingNumber: "",
    amount: "",
    frequency: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    accountNumber: "",
    routingNumber: "",
    amount: "",
  });

  const handleInputChange = (field) => (event) => {
    const value = event.target.value;

    // Validate the Account Number field
    if (field === "accountNumber") {
      const isValidAccountNumber = /^[0-9]{8,17}$/.test(value);

      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        accountNumber: isValidAccountNumber
          ? ""
          : "Account Numbers must be 8 -17 numbers",
      }));
    }

    // Validate the Routing Number field
    if (field === "routingNumber") {
      const isValidRoutingNumber = /^[0-9]{9}$/.test(value);
      const firstTwoDigits = parseInt(value.substring(0, 2), 10);

      const isValidFirstTwoDigits =
        (firstTwoDigits >= 0 && firstTwoDigits <= 12) ||
        (firstTwoDigits >= 21 && firstTwoDigits <= 32) ||
        (firstTwoDigits >= 61 && firstTwoDigits <= 72) ||
        firstTwoDigits === 80;

      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        routingNumber:
          isValidRoutingNumber && isValidFirstTwoDigits
            ? ""
            : "Routing Numbers must be 9 numbers with valid first two digits",
      }));
    }

    // Validate and format the Amount field
    if (field === "amount") {
      const isValidAmount = /^\d+(\.\d{1,2})?$/.test(value);

      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        amount: isValidAmount ? "" : "Invalid Amount format",
      }));
    }

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // const store = useContext(StoreContext);
    store.setAccountData(formData);
  };

  return (
    <Card sx={{ width: 480, minHeight: 480, backgroundColor: "#f3f3f3" }}>
      <CardContent>
        <div data-testid="direct-deposit-form">
          <TextField
            label="Account Number"
            variant="outlined"
            size="small"
            value={formData.accountNumber}
            onChange={handleInputChange("accountNumber")}
            error={!!validationErrors.accountNumber}
            helperText={validationErrors.accountNumber}
            style={{
              marginTop: 30,
              width: 400,
              backgroundColor: "white",
            }}
          />
          <TextField
            label="Routing Number"
            variant="outlined"
            size="small"
            value={formData.routingNumber}
            onChange={handleInputChange("routingNumber")}
            error={!!validationErrors.routingNumber}
            helperText={validationErrors.routingNumber}
            FormHelperTextProps={{
              style: { backgroundColor: "#f3f3f3", background: "#f3f3f3" },
            }}
            style={{
              marginTop: 40,
              width: 400,
              backgroundColor: "white",
            }}
          />
          <TextField
            label="Amount"
            variant="outlined"
            size="small"
            value={formData.amount}
            onChange={handleInputChange("amount")}
            error={!!validationErrors.amount}
            helperText={validationErrors.amount}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            style={{
              marginTop: 40,
              width: 400,
              backgroundColor: "white",
            }}
          />
          <FormControl
            variant="outlined"
            size="small"
            style={{
              marginTop: 40,
              marginBottom: 20,
              width: 400,
              backgroundColor: "white",
            }}
          >
            <InputLabel id="simple-select-label">Frequency</InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              inputProps={{ "data-testid": "simple-select-input" }}
              label="Frequency"
              value={formData.frequency}
              onChange={handleInputChange("frequency")}
            >
              <MenuItem value={"1"}>Once per month</MenuItem>
              <MenuItem value={"2"}>Twice per month</MenuItem>
            </Select>
          </FormControl>
        </div>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          href="/calculator"
          style={{
            marginBottom: 20
          }}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

// Create a wrapper component to provide the store to its children
function StoreProvider({ children }) {
  const [accountData, setAccountData] = useState(null);

  return (
    <StoreContext.Provider value={{ accountData, setAccountData }}>
      {children}
    </StoreContext.Provider>
  );
}

export { DirectDepositForm, StoreProvider };
