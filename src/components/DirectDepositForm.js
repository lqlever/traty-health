import React, { useState } from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TitleLabel = styled("div")({
  height: 33,
  width: 409,
});

const TextWrapper = styled("div")({
  color: "#004990",
  fontFamily: "Roboto-Regular, Helvetica",
  fontSize: 28,
  fontWeight: 400,
  left: 90,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: -260,
  width: 409,
});

const DirectDepositBox = styled("div")({
  backgroundColor: "#f3f3f3",
  height: 480,
  left: 50,
  position: "absolute",
  top: -200,
  width: 480,
});

const SubmitButton = styled(Button)({
  backgroundColor: "#004990",
  borderRadius: 4,
  height: 38,
  left: 184,
  position: "absolute",
  top: 411,
  width: 111,
});


function DirectDepositForm() {
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
        accountNumber: isValidAccountNumber ? "" : "Account Numbers must be 8 -17 numbers",
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
        routingNumber: isValidRoutingNumber && isValidFirstTwoDigits
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
  };

  return (
    <div data-testid="direct-deposit-form">
      <TitleLabel>
        <TextWrapper>New Direct Deposit Enrollment</TextWrapper>
      </TitleLabel>
      <DirectDepositBox>
        <TextField
          label="Account Number"
          variant="outlined"
          size="small"
          value={formData.accountNumber}
          onChange={handleInputChange("accountNumber")}
          error={!!validationErrors.accountNumber}
          helperText={validationErrors.accountNumber}
          style={{
            top: 40,
            width: 400,
            left: 40,
            position: "absolute",
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
          style={{
            top: 120,
            width: 400,
            left: 40,
            position: "absolute",
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
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          style={{
            top: 200,
            width: 400,
            left: 40,
            position: "absolute",
            backgroundColor: "white",
          }}
        />
        <FormControl
          variant="outlined"
          size="small"
          style={{
            top: 280,
            width: 400,
            left: 40,
            position: "absolute",
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
            <MenuItem value={'1'}>Once per month</MenuItem>
            <MenuItem value={'2'}>Twice per month</MenuItem>
          </Select>
        </FormControl>
        <SubmitButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          href="/calculator"
        >
          Submit
        </SubmitButton>
      </DirectDepositBox>
    </div>
    
  );
}

export default DirectDepositForm;
