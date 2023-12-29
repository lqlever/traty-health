import * as React from 'react';
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { Paper } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const TitleLabel = styled("div")({
  height: 33,
  width: 409,
});

const TextWrapper = styled("div")({
  color: "#004990",
  fontFamily: "Roboto-Regular, Helvetica",
  fontSize: 28,
  fontWeight: 400,
  left: 130,
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: -300,
  width: 409,
});

const CalculateButton = styled(Button)({
  backgroundColor: "#004990",
  color: "#FFFFFF",
  borderRadius: 4,
  height: 38,
  left: 262,
  position: "absolute",
  top: 172,
  width: 111,
});

const CalendarPaper = styled(Paper)({
  square: false,
  left: 160,
  position: "absolute",
  top: -220,
  width: 320,
});

function CompoundInterestCalendar() {
  return (
    <div data-testid="compound-interest-calendar">
      <TitleLabel>
        <TextWrapper>Compound Interest Calculator</TextWrapper>
      </TitleLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarPaper elevation={8}>
          <DateCalendar />  
        </CalendarPaper>
        <CalculateButton
          variant="contained"
          color="primary"
          href="/"
        >
          Calculate
        </CalculateButton>
      </LocalizationProvider>
    </div>
   
  );
};

export default CompoundInterestCalendar;

