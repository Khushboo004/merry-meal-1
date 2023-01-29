import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import DataSummary from "./components/DataSummary";
import UserInfo from "./components/UserInfo";
import MealManagement from "./components/MealManagement";
import DeliManagement from "./components/DeliManagement";
import DonationManagement from "./components/DonationManagement";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<Dashboard />}>
          <Route index element={<DataSummary />}></Route>
          <Route path={"profile"} element={<Profile />}></Route>
          <Route path={"dataSummary"} element={<DataSummary />}></Route>
          <Route path={"userinfo"} element={<UserInfo />}></Route>
          <Route path={"mealinfo"} element={<MealManagement />}></Route>
          <Route path={"deliinfo"} element={<DeliManagement />}></Route>
          <Route path={"donateinfo"} element={<DonationManagement />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
