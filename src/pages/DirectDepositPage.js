import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { DirectDepositForm } from "../components/DirectDepositForm";

function DirectDepositPage() {
  return (
    <div>
      <Box>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Grid item xs={12}>
            <Typography variant="h5" mt={18} mb={4} color="#004990">
              New Direct Deposit Enrollment
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DirectDepositForm />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default DirectDepositPage;
