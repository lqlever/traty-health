import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function WelcomePage() {
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
            <Typography variant="h3" gutterBottom mt={12} color="#004990">
              Welcome to the Bank of Trayt
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" mt={12} mb={8} color="#004990">
              Initiate a new Direct Deposit to earn 5% for 36 Months!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" href="/direct-deposit">Learn More</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default WelcomePage;