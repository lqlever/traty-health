import React from 'react';
import './styles.css';
import CompoundInterestCalculator from '../components/CompoundInterestCalendar';

function InterestCalculatorPage() {
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
            </div>
            <div className='overlap'>
              {/* <CompoundInterestCalendar /> */}
              <CompoundInterestCalculator />
            </div>
        </div>
    );
};

export default InterestCalculatorPage;