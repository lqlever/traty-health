import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const CalculateButton = styled(Button)({
  color: "#FFFFFF",
  borderRadius: 4,
  height: 38,
  marginTop: 50,
});

const CalendarPaper = styled(Paper)({
  square: false,
  width: 320,
});

function CompoundInterestCalendar() {
  return (
    <div data-testid="compound-interest-calendar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarPaper elevation={8}>
          <DateCalendar />
        </CalendarPaper>
        <CalculateButton variant="contained" color="primary" href="/">
          Calculate
        </CalculateButton>
      </LocalizationProvider>
    </div>
  );
}

export default CompoundInterestCalendar;
