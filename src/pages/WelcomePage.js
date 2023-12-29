import React from 'react';
import { Button, Stack } from '@mui/material';
import './styles.css';

function WelcomePage() {
    return (
        <div className="welcome-frame">
            <div className="welcome-div">
                <div className="welcome-navbar">
                    <div className="text-wrapper">Sign In</div>
                    <div className="text-wrapper-2">En Español</div>
                    <div className="text-wrapper-3">Locations</div>
                    <div className="text-wrapper-4">Contact Us</div>
                    <div className="text-wrapper-5">Help</div>
                </div>
                <div className="overlap-group">
                    <div className="text-wrapper-6">Personal</div>
                    <div className="text-wrapper-7">Small Business</div>
                    <div className="text-wrapper-8">Wealth Management</div>
                    <div className="business">Business &amp; Institutions</div>
                    <div className="text-wrapper-9">About Us</div>
                </div>
                <div className='overlap'>
                  <Stack spacing={2}>
                    <Button 
                      style={{ backgroundColor: "#004990"}}
                      href="/deposit"
                      variant="contained">Learn More
                    </Button>
                  </Stack>
                </div>
                <p className="p">Welcome to Bank of Trayt</p>
                <p className="text-wrapper-11">Initiate a new Direct Deposit to earn 5% for 36 Months!</p>
            </div>
        </div>
    );
};

export default WelcomePage;