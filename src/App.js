import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import DirectDepositPage from './pages/DirectDepositPage';
import InterestCalculatorPage from './pages/InterestCalculatorPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/deposit" element={<DirectDepositPage />} />
          <Route path="/calculator" element={<InterestCalculatorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
