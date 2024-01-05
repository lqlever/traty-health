import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationAppBar from "./components/NavigationAppBar.js";
import WelcomePage from "./pages/WelcomePage";
import DirectDepositPage from "./pages/DirectDepositPage";
import InterestCalculatorPage from "./pages/InterestCalculatorPage";

function App() {
  return (
    <div>
      <NavigationAppBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/calculator" element={<InterestCalculatorPage />} />
          <Route path="/direct-deposit" element={<DirectDepositPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
